import { getInitialPosts } from "./getInitialPosts"
import { getPostBySlug } from "./getPostBySlug"
import { getPostsBySearch } from "./getPostsBySearch"

export const postsService = {
  getInitialPosts,
  getPostBySlug,
  getPostsBySearch
}
