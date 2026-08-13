/**
 * Featured Projects — data source.
 * FeaturedProjects.jsx maps over this array and renders a
 * <ProjectCard /> per entry.
 *
 * NOTE: thumbnail is left empty (ProjectCard renders a placeholder
 * block) since no project images were provided. Drop images into
 * src/assets/images/ and import them here when ready.
 * githubUrl/liveUrl are left null — no repo/demo links were given in
 * the resume; fill in real URLs to enable those buttons.
 */

export const projects = [
  {
    id: "fraud-detection-digital-payments",
    title: "Fraud Detection in Digital Payment Systems",
    description:
      "Fraud detection system on 100K+ transactions using Logistic Regression, Random Forest, and XGBoost, with SMOTE and cost-sensitive learning improving fraud recall by 18%. SHAP/LIME added explainability for compliance and analyst review.",
    thumbnail: "",
    tags: ["Python", "XGBoost", "SMOTE", "SHAP", "LIME"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    research: false,
  },
  {
    id: "hindi-asr-whisper-finetuning",
    title: "Hindi ASR Fine-tuning — Whisper on Conversational Hindi",
    description:
      "Fine-tuned Whisper-small on 10hrs of conversational Hindi audio (4,929 segments, 104 speakers), cutting Word Error Rate from 178% to 10.57% via domain fine-tuning, a custom preprocessing pipeline, and lattice-based WER evaluation.",
    thumbnail: "",
    tags: ["Transformers", "Whisper", "Librosa", "PyTorch"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    research: false,
  },
];
