/**
 * # Environments
 *
 * Infrastructure which the applications are deployed to
 */

terraform {
  backend "azurerm" {
    resource_group_name = "fenis4y-rg"
    storage_account_name = "fenistorage"
    container_name = "tfstate"
    key = "environments.tfstate"
  }
}

provider "azurerm" {
  features {}
}

# Controls access to the main PINS subscription - "read" access is required
provider "azurerm" {
  alias = "Fenisub"
  subscription_id = var.pins_key_vault_subscription_id
  features {}
}

data "azurerm_client_config" "current" {}

data "azurerm_container_registry" "fenis4y" {
  name = var.container_registry_name
  resource_group_name = var.container_registry_rg_name
}

data "http" "myip" {
  url = "https://ipv4.icanhazip.com"
}
