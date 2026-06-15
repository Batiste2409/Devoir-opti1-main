import DatasService from "../services/DatasService"

function Home () {
    const allProjects = DatasService();
    console.log(allProjects);
     const imageUrl = new URL(`../assets/img`, import.meta.url).href;
    return (
        <>
            <h2>Page d'acceuil</h2>
        <section>
            {allProjects.projects.map((project) => (
                <article>
                    <h3>{project.title}</h3>
                    <em>{project.description}</em>
                    <span>{project.techno}</span>
                    <img src={`${imageUrl}/${project.picture}`} alt="" />
                </article>
            ))}
        </section>
        </>
    )
}

export default Home