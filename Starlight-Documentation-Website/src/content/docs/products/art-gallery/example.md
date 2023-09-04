---
title: Art Gallery
description: The landing page for the Art Gallery project.
---

import { Card, LinkCard, CardGrid, Icon } from '@astrojs/starlight/components';

<Card
    title="Welcome to the Art Gallery"
    href="/products/art-gallery/example/"
    icon="bars"
/>

<CardGrid>
    <LinkCard 
        title="GitHub"
        href="https://github.com/thoth-tech/art-gallery"
    />
    <LinkCard 
        title="Documentation" 
        href="https://github.com/thoth-tech/documentation/tree/main/docs/ArtGallery"
    />
</CardGrid>

### About Us

The Art Gallery is a product being created to help sell and advertise rural Art in Australia. We made some good progress last trimester and have some amended goals this trimester to move the product forward. The key focuses this trimester will be about getting the system deployed with a working knowledge base. So future work on the system can be easier we will also look at implementing a CI/CD pipeline.
