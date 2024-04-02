module.exports = {
  ci: {
    upload: {
      target: "lhci",
      serverBaseUrl: "http://localhost:9001",
      token: "a44bf53c-deab-4238-ba0e-203a74720c21", // build token from lhci wizard
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
        "categories:best-practices": ["error", { minScore: 0.8 }],
        "categories:seo": ["error", { minScore: 0.5 }],
      },
    },
  },
};
