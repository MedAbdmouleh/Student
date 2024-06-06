/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "desktop laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tech lead Power BI & Power Platform (Amaris Consulting)",
    description:
      "En tant que professionnel certifié, j'ai acquis une expertise solide dans le domaine de la Business Intelligence (BI) et de l'automatisation des processus. Avec mes certifications Power BI, Power Automate, et Microsoft Certified: Azure Enterprise Data Analyst Associate, j'ai démontré ma capacité à concevoir et implémenter des solutions avancées dans des environnements complexes. Mon expérience pratique avec des entreprises de premier plan telles que Bouygues Telecom m'a permis de mettre en œuvre avec succès des solutions BI intégrant des outils comme Power BI et Data Factory. ",
    
  },
  {
    title: "Consultant MSBI & Power BI (DeltaSoft International)",
    description:
      "J'ai mis en œuvre avec succès des solutions de Business Intelligence pour différents clients, tels que Automobile Zouari et Benyaghlane Shops. Je suis habile dans la collecte, le nettoyage et l'analyse de données en utilisant des outils tels que SSIS pour l'ETL et Power BI pour la visualisation. J'ai découvert des tendances, des modèles et des relations dans les données, et prévu les tendances futures des ventes en utilisant des techniques statistiques.",
      url: "https://www.youtube.com/watch?v=eUTNminjuSY",
  },
  {
    title: "Formations Power BI (The Way center)",
    description:
      "En tant que formateur expert certifié PL-300 et Microsoft Certified: Power BI Data Analyst Associate, j'ai acquis une réputation solide en dispensant des formations sur Power BI à des professionnels de divers secteurs en Tunisie. Fort de mon expérience approfondie, j'ai eu le privilège d'accompagner des spécialistes en finance, en marketing, en santé, en vente et en logistique dans leur exploration et leur maîtrise de cette plateforme d'analyse de données essentielle. Ma certification PL-300, témoignant de ma maîtrise dans la conception, la configuration et le déploiement des solutions Power Platform, renforce mon savoir-faire dans l'intégration et l'automatisation des processus métier, tout en m'offrant une crédibilité accrue dans le domaine de la formation professionnelle.",
   
  },
  {
    title: "Formations Power BI (Orange)",
    description:
      "En tant que formateur passionné de Power BI, chaque moment passé à assurer cette formation de trois jours à l'ISET de Nabeul a été véritablement inoubliable. Collaborer avec le Orange Tech Club ISETN et Opus Lab a ajouté une dynamique excitante à cette expérience enrichissante. C'était un véritable plaisir de travailler aux côtés d'étudiants si motivés, avides de découvrir les rouages de Power BI. Leur enthousiasme contagieux a rendu chaque session plus captivante. En partageant mes connaissances et mon expertise avec eux, j'ai vu leurs compétences se développer sous mes yeux, ce qui était incroyablement gratifiant en tant que formateur.",
    url: "https://stdntpartners-my.sharepoint.com/personal/mohamed_abdmouleh_studentambassadors_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmohamed%5Fabdmouleh%5Fstudentambassadors%5Fcom%2FDocuments%2FFormation%20Power%20BI%20Orange",
  },
  {
    title: "Formations Power BI (CTIG)",
    description:
      "En tant que formateur expert, j'ai acquis une vaste expérience dans la dispensation de formations sur Power BI à des professionnels issus de divers secteurs d'activité tels que finance, marketing, santé, vente, et logistique dans la Tunisie. Ma certification PL-300 atteste de ma maîtrise des compétences avancées nécessaires pour concevoir, configurer et déployer des solutions Power Platform, renforçant ainsi mon expertise dans le domaine de l'intégration et de l'automatisation des processus métier.",
   
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
