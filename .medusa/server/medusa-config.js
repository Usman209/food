"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || 'development', process.cwd());
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        redisUrl: process.env.REDIS_URL,
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            authCors: process.env.AUTH_CORS,
            jwtSecret: process.env.JWT_SECRET || 'fadsfadf3244sd',
            cookieSecret: process.env.COOKIE_SECRET || 'supersecret',
        },
        workerMode: process.env.MEDUSA_WORKER_MODE,
    },
    admin: {
        disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
        backendUrl: process.env.MEDUSA_BACKEND_URL,
    },
    modules: [
        {
            resolve: "@medusajs/medusa/cache-redis",
            options: {
                redisUrl: process.env.REDIS_URL,
            },
        },
        {
            resolve: "@medusajs/medusa/event-bus-redis",
            options: {
                redisUrl: process.env.REDIS_URL,
            },
        },
        {
            resolve: "@medusajs/medusa/workflow-engine-redis",
            options: {
                redis: {
                    url: process.env.REDIS_URL,
                },
            },
        },
        {
            resolve: "@medusajs/medusa/file",
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/file-s3",
                        id: "s3",
                        options: {
                            file_url: process.env.S3_FILE_URL || "http://203.161.43.125:9090/food",
                            access_key_id: process.env.S3_ACCESS_KEY_ID,
                            secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
                            region: process.env.S3_REGION,
                            bucket: process.env.S3_BUCKET,
                            endpoint: process.env.S3_ENDPOINT,
                            additional_client_config: {
                                forcePathStyle: true,
                            },
                        },
                    },
                ],
            },
        },
    ],
    featureFlags: {
    // Add any feature flags here
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUU7QUFFakUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBRTdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBWSxFQUFDO0lBQzVCLGFBQWEsRUFBRTtRQUNiLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDckMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUztRQUMvQixJQUFJLEVBQUU7WUFDSixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXO1lBQ2xDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVc7WUFDbEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBVTtZQUNoQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXLElBQUksZ0JBQWdCO1lBQ3RELFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWMsSUFBSSxhQUFhO1NBQzFEO1FBQ0QsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQW9EO0tBQzdFO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEtBQUssTUFBTTtRQUNwRCxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7S0FDM0M7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7YUFDaEM7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFFLGtDQUFrQztZQUMzQyxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzthQUNoQztTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsd0NBQXdDO1lBQ2pELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUztpQkFDM0I7YUFDRjtTQUNGO1FBQ0Q7WUFFRSxPQUFPLEVBQUUsdUJBQXVCO1lBRWhDLE9BQU8sRUFBRTtnQkFFUCxTQUFTLEVBQUU7b0JBRVQ7d0JBRUUsT0FBTyxFQUFFLDBCQUEwQjt3QkFFbkMsRUFBRSxFQUFFLElBQUk7d0JBRVIsT0FBTyxFQUFFOzRCQUVQLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxpQ0FBaUM7NEJBQ3RFLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQjs0QkFFM0MsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0I7NEJBRW5ELE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7NEJBRTdCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7NEJBRTdCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7NEJBRWpDLHdCQUF3QixFQUFFO2dDQUV4QixjQUFjLEVBQUUsSUFBSTs2QkFFckI7eUJBRUY7cUJBRUY7aUJBRUY7YUFFRjtTQUVGO0tBRUY7SUFDRCxZQUFZLEVBQUU7SUFDWiw2QkFBNkI7S0FDOUI7Q0FDRixDQUFDLENBQUEifQ==