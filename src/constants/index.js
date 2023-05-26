const features = [
    {
        "id": "1",
        "name": "Amplify Auth",
        "url": "/auth",
        "description": "Amplify Auth provides authentication and authorization capabilities for your application.",
        "features": [
            "User sign-up and sign-in",
            "Social sign-in with providers like Amazon Cognito, Google, and Facebook",
            "Custom authentication flows",
            "User management and attribute customization",
            "Authorization with fine-grained permissions",
            "Multi-factor authentication (MFA)",
            "Forgot password and password reset",
            "Access control via user groups and roles"
        ]
    },
    {
        "id": "2",
        "name": "Amplify API",
        "url": "/api",
        "description": "Amplify API allows you to create and interact with a backend API for your application.",
        "features": [
            "GraphQL API with real-time subscriptions",
            "RESTful API support",
            "Automatic API generation from schema definition",
            "Authentication and authorization integration",
            "Custom resolvers and mapping templates",
            "Data validation and transformation",
            "Pagination and filtering",
            "Lambda function integration",
            "Database integration with AWS AppSync",
            "API versioning and stages"
        ]
    },
    {
        "id": "3",
        "name": "Amplify PubSub",
        "url": "/pubsub",
        "description": "Amplify PubSub provides a publish-subscribe messaging pattern for real-time communication in your application.",
        "features": [
            "Real-time messaging with publish and subscribe",
            "Supports multiple clients and subscribers",
            "Topic-based message routing",
            "Integration with AWS SNS (Simple Notification Service)",
            "Event-driven architecture",
            "Serverless and scalable",
            "Push notifications",
            "Chat and messaging applications"
        ]
    },
    {
        "id": "4",
        "name": "Amplify Functions",
        "url": "/functions",
        "description": "Amplify Functions enables you to write and deploy serverless functions as part of your application's backend logic.",
        "features": [
            "Serverless computing with AWS Lambda",
            "Event-driven architecture",
            "Custom business logic and workflows",
            "Integration with other Amplify services",
            "Database triggers and data processing",
            "Scalable and cost-effective",
            "Microservices architecture",
            "Offline and background processing",
            "Scheduled tasks and cron jobs"
        ]
    },
    {
        "id": "5",
        "name": "Amplify Analytics",
        "url": "/analytics",
        "description": "Amplify Analytics provides insights into user behavior and app usage for data-driven decision making.",
        "features": [
          "Capture and analyze user events and interactions",
          "Track app usage, sessions, and retention",
          "Segment and target user groups",
          "Integrate with data visualization tools",
          "Monitor performance and user experience",
          "Custom event tracking",
          "Real-time and historical data analysis"
        ]
      },{
        "id": "6",
        "name": "Amplify Integration",
        "url": "/intergrations",
        "description": "Amplify Integration enables seamless integration with external services and systems.",
        "features": [
          "Connect to third-party APIs and services",
          "Data synchronization and replication",
          "Webhooks and event-driven workflows",
          "Real-time data updates",
          "Custom integrations",
          "Extensible and flexible",
          "Error handling and retries",
          "Transform and manipulate data",
          "Legacy system integration"
        ]
      }
]

export default features;