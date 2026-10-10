function ToolPage({ tool }) {
  return (
    <article className="container page-section learning-page">
      <div className="section-label">{tool.category.toUpperCase()}</div>
      <h1 className="section-heading">{tool.name}</h1>
      <p className="section-description learning-overview">{tool.overview}</p>

      <section className="learning-card" aria-labelledby="workflow-heading">
        <h2 id="workflow-heading">A typical workflow</h2>
        <ol className="learning-steps">
          {tool.workflow.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="learning-card" aria-labelledby="example-heading">
        <h2 id="example-heading">Example</h2>
        <pre><code>{tool.example}</code></pre>
      </section>
    </article>
  );
}

export default ToolPage;
