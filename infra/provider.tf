terraform {
    required_providers {
        aws = {
            version = ">= 4.9.0"
            source = "hashicorp/aws"
        }

    }
}

provider "aws" {
    profile = "your"
    access_key = "dfsa"
    secret_key = "adfadf"
    region = "ca-central-1"
}