/*
  Common
 */

variable "location" {
  description = "Default location for resources"
  type = string
}

variable "prefix" {
  description = "Resource prefix"
  type = string
  default = "fenis4ycommon"

}

/*
  Container
 */

variable "container_sku_type" {
  description = "SKU for registry - 'Basic' (10GB), 'Standard' (100GB) or 'Premium' (500GB)"
  type = string
}

/*
  GitHub
 */

variable "github_token" {
  description = "Token to access the GitHub API"
  type = string
  sensitive = true
}

variable "github_org_name" {
  description = "Name of the GitHub organisation"
  type = string
}

variable "github_repo_name" {
  description = "Name of the GitHub repository"
  type = string
}
