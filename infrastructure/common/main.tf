/**
 * # Common Infrastructure
 *
 * Infrastructure which is common to the subscription, regardless of which environment
 */

terraform {
  backend "azurerm" {
    resource_group_name = "fenis4y-rg"
    storage_account_name = "fenistorage"
    container_name = "tfstate"
    key = "common.tfstate"
  }
}

provider "azurerm" {
  features {}
}

provider "github" {
  token = var.github_token
  organization = var.github_org_name
}

data "azurerm_client_config" "current" {}
