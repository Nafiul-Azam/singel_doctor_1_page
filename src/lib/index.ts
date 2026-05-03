/**
 * Utility Functions Index
 * Central hub for all utility functions and helpers
 */

// String utilities
export { cn } from "./utils/cn";

// Date utilities
export { formatDisplayDate } from "./utils/date";

// Format utilities
export { truncateText } from "./utils/format";

// API utilities
export {
  httpRequest,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  httpPatch,
  type RequestOptions,
} from "./http-client";

export { ApiResponseHandler, API_CONFIG } from "./api-response-handler";

export {
  API_ENDPOINTS,
  PAGINATION,
  SORT_OPTIONS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from "./backend-integration-guide";
