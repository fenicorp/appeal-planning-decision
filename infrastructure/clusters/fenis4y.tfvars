location = "francecentral"
container_sku_type= "Basic"

container_registry_name = "fenis4y"
container_registry_rg_name = "fenis4y-rg"

pins_key_vault_subscription_id = "e7acc3ae-b786-4398-866f-48ef08d2ef45"
pins_key_vault = "/subscriptions/e7acc3ae-b786-4398-866f-48ef08d2ef45/resourceGroups/fenis4y-rg/providers/Microsoft.KeyVault/vaults/feniKeyVault"

k8s_min_nodes = 1
k8s_max_nodes = 3

mongodb_auto_failover = false
mongodb_databases = []
mongodb_failover_locations = []
mongodb_multi_write_locations = false
