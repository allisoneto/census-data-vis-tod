/**
 * Base path for GitHub Pages and other subpath deployments.
 * Resolves asset/data URLs so they work when the app is served from a subpath
 * (e.g. /census-data-vis-tod on GitHub Pages).
 */

import { base } from '$app/paths'

/**
 * Resolve an absolute path (e.g. /manifest.json, /data/...) for the current base path.
 * When base is empty (dev), returns path as-is. When base is e.g. /census-data-vis-tod,
 * returns /census-data-vis-tod/path.
 */
export function dataUrl(path: string): string {
  return base + path
}
