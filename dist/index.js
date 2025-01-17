// Re-export everything from generated code
export * from './generated';
// Add version information
export const VERSION = '1.0.0';
// Add simple configuration helper
export function createGongClient(accessToken, baseUrl = 'https://api.gong.io/v2') {
    return {
        configuration: {
            basePath: baseUrl,
            accessToken
        }
    };
}
