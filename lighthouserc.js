module.exports = {
  ci: {
    upload: {
      target: "lhci",
      serverBaseUrl: "http://localhost:9001",
      token: "75812b5e-126f-4fc5-ad3d-686163061de1", // build token from lhci wizard
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
        "categories:best-practices": ["error", { minScore: 0.8 }],
        "categories:seo": ["error", { minScore: 0.8 }],
      },
    },
  },
};
