import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Check the responsive layout", done: true },
  { id: 2, title: "Try the interactive counter", done: false },
  { id: 3, title: "Add a task to the list", done: false },
];

const features = [
  {
    icon: "✦",
    title: "A clean starting point",
    description: "A simple, polished interface that is easy to explore and customize.",
    color: "lavender",
  },
  {
    icon: "⌘",
    title: "Ready to experiment",
    description: "Try the controls, resize the page, and see your changes take shape.",
    color: "mint",
  },
  {
    icon: "↗",
    title: "Built with React",
    description: "A lightweight Vite setup with familiar components and fast reloads.",
    color: "peach",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const completedTasks = tasks.filter((task) => task.done).length;

  function addTask(event) {
    event.preventDefault();
    const title = newTask.trim();
    if (!title) return;

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), title, done: false },
    ]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Orbit home">
          <span className="brand-mark">o</span>
          <span>orbit</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#playground">Playground</a>
        </nav>
        <a className="header-link" href="#playground">
          Get started <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> YOUR LITTLE SPACE TO BUILD</div>
            <h1>Good things<br />start <span>somewhere.</span></h1>
            <p className="hero-description">
              A friendly React playground for trying ideas, testing your setup,
              and making something of your own.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#playground">
                Explore the playground <span aria-hidden="true">↓</span>
              </a>
              <span className="hero-note">No setup fuss. Just get creating.</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of a sunny day">
            <div className="art-sun" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-cloud cloud-one" />
            <div className="art-cloud cloud-two" />
            <div className="art-hill hill-back" />
            <div className="art-hill hill-front" />
            <div className="art-label"><span>✦</span> A fresh start</div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <div>
              <p className="section-kicker">A FEW GOOD THINGS</p>
              <h2>Small site, big possibilities.</h2>
            </div>
            <p className="section-aside">Use this space to test, tinker, and make it yours.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className={`feature-icon ${feature.color}`} aria-hidden="true">
                  {feature.icon}
                </div>
                <span className="feature-number">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="playground-section" id="playground">
          <div className="playground-intro">
            <p className="section-kicker">OVER TO YOU</p>
            <h2>Make a little<br /><span>something.</span></h2>
            <p>Here are a couple of working bits to click around and test.</p>
            <div className="playground-decoration" aria-hidden="true">✳</div>
          </div>

          <div className="demo-panels">
            <section className="demo-card counter-card" aria-labelledby="counter-title">
              <div className="demo-card-heading">
                <div>
                  <span className="demo-label">INTERACTIVE DEMO</span>
                  <h3 id="counter-title">Click counter</h3>
                </div>
                <span className="demo-symbol" aria-hidden="true">＋</span>
              </div>
              <p className="demo-hint">A tiny button, an infinite number of clicks.</p>
              <div className="counter-display" aria-live="polite">{count}</div>
              <div className="counter-controls">
                <button className="button button-dark" onClick={() => setCount((value) => value + 1)}>
                  Count me in <span aria-hidden="true">↗</span>
                </button>
                <button
                  className="reset-button"
                  onClick={() => setCount(0)}
                  disabled={count === 0}
                >
                  Reset
                </button>
              </div>
            </section>

            <section className="demo-card tasks-card" aria-labelledby="tasks-title">
              <div className="demo-card-heading">
                <div>
                  <span className="demo-label">YOUR CHECKLIST</span>
                  <h3 id="tasks-title">Little to-dos</h3>
                </div>
                <span className="task-progress">{completedTasks}/{tasks.length}</span>
              </div>
              <form className="task-form" onSubmit={addTask}>
                <label className="visually-hidden" htmlFor="new-task">Add a task</label>
                <input
                  id="new-task"
                  value={newTask}
                  onChange={(event) => setNewTask(event.target.value)}
                  placeholder="Add something to try..."
                />
                <button type="submit" aria-label="Add task">+</button>
              </form>
              <ul className="task-list">
                {tasks.map((task) => (
                  <li key={task.id}>
                    <label className={task.done ? "task-done" : ""}>
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleTask(task.id)}
                      />
                      <span className="custom-checkbox" aria-hidden="true">
                        {task.done && "✓"}
                      </span>
                      <span>{task.title}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">o</span><span>orbit</span>
        </a>
        <span>Made for trying things out.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
