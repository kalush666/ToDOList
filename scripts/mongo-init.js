// MongoDB initialization script
db = db.getSiblingDB("todolist");

// Create collections
db.createCollection("users");
db.createCollection("tasks");

// Create indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.tasks.createIndex({ userId: 1 });
db.tasks.createIndex({ createdAt: 1 });

print("Database initialized successfully!");
