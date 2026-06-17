import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Curated list of user's best projects with detailed descriptions and specific technologies.
  // We merge stats (stars, forks) from the GitHub API if successfully fetched.
  const curatedProjects = [
    {
      name: 'readAI',
      description: 'An AI-powered reading companion and document analysis platform designed to digest, summarize, and extract insights from textual documents.',
      technologies: ['Langchain', 'React', 'Node.js', 'LLMs'],
      html_url: 'https://github.com/mandeep-bhandari123/readAI'
    },
    {
      name: 'LaravelAiSDK',
      description: 'A clean and modular Laravel SDK integration wrapper enabling seamless communication with advanced Generative AI APIs.',
      technologies: ['PHP', 'Laravel', 'Blade', 'AI Integration'],
      html_url: 'https://github.com/mandeep-bhandari123/LaravelAiSDK'
    },
    {
      name: 'StudentManagement',
      description: 'A comprehensive school and student records management system featuring secure authentication, CRUD, and academic tracking.',
      technologies: ['PHP', 'Laravel', 'Blade', 'MySQL'],
      html_url: 'https://github.com/mandeep-bhandari123/StudentManagement'
    },
    {
      name: 'fastAPIasync',
      description: 'A high-performance, asynchronous REST API backend leveraging FastAPI, designed for low latency and high concurrency.',
      technologies: ['Python', 'FastAPI', 'Asyncio', 'SQLAlchemy'],
      html_url: 'https://github.com/mandeep-bhandari123/fastAPIasync'
    },
    {
      name: 'Web-Scrapper',
      description: 'A robust, multi-threaded web scraper designed to extract data from target websites efficiently and handle rate-limits dynamically.',
      technologies: ['Python', 'BeautifulSoup', 'Requests'],
      html_url: 'https://github.com/mandeep-bhandari123/Web-Scrapper'
    },
    {
      name: 'Digit-Recognizer',
      description: 'A Convolutional Neural Network (CNN) model for accurate handwritten digit classification using the MNIST dataset.',
      technologies: ['Python', 'TensorFlow/Keras', "NumPy", "Matplotlib", "MNIST dataset"],
      html_url: 'https://github.com/mandeep-bhandari123/Digit-Recognizer'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mandeep-bhandari123/repos');
        if (response.ok) {
          const data = await response.json();
          // Create a lookup map of fetched repositories
          const repoMap = {};
          data.forEach(repo => {
            repoMap[repo.name] = repo;
          });

          // Merge fetched stats (stars, forks) into our curated project metadata
          const merged = curatedProjects.map(proj => {
            const apiRepo = repoMap[proj.name];
            return {
              ...proj,
              stars: apiRepo ? apiRepo.stargazers_count : 0,
              forks: apiRepo ? apiRepo.forks_count : 0,
              language: apiRepo ? apiRepo.language : null
            };
          });

          setRepos(merged);
        } else {
          // Fallback if rate-limited or error
          setRepos(curatedProjects.map(p => ({ ...p, stars: 0, forks: 0 })));
        }
      } catch (err) {
        console.error('Error fetching repos:', err);
        // Fallback on network failure
        setRepos(curatedProjects.map(p => ({ ...p, stars: 0, forks: 0 })));
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const titleArray = ['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's'];

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray}
              idx={15}
            />
          </h1>
          <p className="intro-text">
            Here are some of the key open-source projects I have developed.
            Fetched directly from my GitHub profile with live repository statistics.
          </p>

          {!loading && (
            <div className="projects-grid">
              {repos.map((project, idx) => (
                <div
                  className="project-card"
                  key={project.name}
                  style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                >
                  <div className="card-header">
                    <h3>{project.name}</h3>
                    <div className="stats">
                      {project.stars > 0 && (
                        <span className="stat-item" title="Stars">
                          <FontAwesomeIcon icon={faStar} /> {project.stars}
                        </span>
                      )}
                      {project.forks > 0 && (
                        <span className="stat-item" title="Forks">
                          <FontAwesomeIcon icon={faCodeBranch} /> {project.forks}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="description">{project.description}</p>

                  <div className="card-footer">
                    <div className="tech-tags">
                      {project.technologies.map(tech => (
                        <span className="tag" key={tech}>{tech}</span>
                      ))}
                    </div>

                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="github-btn"
                    >
                      <FontAwesomeIcon icon={faGithub} /> Repo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
