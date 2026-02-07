import React from "react";
import styles from "./Glossary.module.css";

export const Glossary = () => {
  const glossaryItems = [
    {
      acronym: "MBq",
      expanded: "Megabecquerels",
      description:
        "Unit of radioactivity; one million disintegrations per second",
    },
    {
      acronym: "mCi",
      expanded: "Millicuries",
      description:
        "Unit of radioactivity; 37 million disintegrations per second",
    },
    {
      acronym: "m",
      expanded: "Meter",
      description: "International standard unit of length",
    },
    {
      acronym: "cm",
      expanded: "Centimeter",
      description: "One hundredth of a meter (0.01 m)",
    },
    {
      acronym: "ft",
      expanded: "Feet",
      description: "Imperial unit of length; approximately 0.3048 meters",
    },
    {
      acronym: "in",
      expanded: "Inches",
      description: "Imperial unit of length; one twelfth of a foot",
    },
    {
      acronym: "mR/hr",
      expanded: "Millirem per Hour",
      description:
        "Unit of radiation dose rate; measure of radiation exposure over time",
    },
    {
      acronym: "HVL",
      expanded: "Half Value Layer",
      description:
        "Thickness of material needed to reduce radiation intensity by half",
    },
    {
      acronym: "Tc-99m",
      expanded: "Technetium-99m",
      description:
        "Metastable technetium isotope; most common nuclear medicine imaging agent",
    },
    {
      acronym: "I-131",
      expanded: "Iodine-131",
      description:
        "Radioactive iodine isotope; used in thyroid imaging and therapy",
    },
    {
      acronym: "F-18",
      expanded: "Fluorine-18",
      description: "Radioactive fluorine isotope; used in PET imaging studies",
    },
  ];

  return (
    <aside className={styles.glossary}>
      <div className={styles.header}>
        <h3 className={styles.title}>Acronyms & Terms</h3>
      </div>
      <div className={styles.itemsContainer}>
        {glossaryItems.map((item) => (
          <div key={item.acronym} className={styles.item}>
            <div className={styles.acronym}>{item.acronym}</div>
            <div className={styles.content}>
              <div className={styles.expanded}>{item.expanded}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
