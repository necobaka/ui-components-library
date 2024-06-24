<script setup>
  import { BreadcrumbLink, Breadcrumbs } from '@acronis-platform/ui-component-library';
  import { IChevronRight } from '@acronis-platform/icons';
</script>

<template>
  <Breadcrumbs :separatorIcon="IChevronRight">
    <BreadcrumbLink to="/">
      Home
    </BreadcrumbLink>
    <BreadcrumbLink
      icon="i-folder-o--16"
      to="/products"
    >
      Products
    </BreadcrumbLink>
    <BreadcrumbLink
      icon="i-customer-o--16"
      to="/customers"
    >
      Customers
    </BreadcrumbLink>
  </Breadcrumbs>
</template>
