# Indigenous Art Gallery

## Documentation Host Case

### Preamble

This was a case created during contact with Andrew Cain concerning hosting options for a BookStack
version of the knowledge base.

This document has been created to provide a case for hosting the Thoth Tech art gallery project's
knowledge base through Deakin's Google Cloud platform. Alternatives that have been considered for
this project are listed and briefly described to provide context for the project's current
direction.

### Hosting/Platform Alternatives Considered

- Confluence: this is the platform that was originally intended for use as the knowledge base since
  last handover and was originally promising with its multitude of features and interface. However,
  due to certain size limitations that came with the free licence version of the software, and the
  classroom licence only providing a percentage discount, the platform was deemed economically
  unviable for the project during a meeting with the client, and was dropped in favour of Bookstack.
- Wikidot: extremely briefly considered due to being free to use, being the host of certain other
  high-profile hobbyist databases, and plausibly being able to hold the intended knowledge base
  structure. This service is unfortunately very outdated, and with all active development having
  been dropped years ago, most major wikis are intending to migrate away or are already hosting
  alternative sites.
- GitHub Pages: a free and accessible platform that could plausibly hold the knowledge base
  structure even in its most basic form, albeit in a less accessible manner than solutions designed
  expressly as wiki platforms. It seems that the reason that this wasn't originally considered for
  hosting the knowledge base since the previous handover is due the platform not necessarily being
  the best option for a knowledge base when compared to platforms like Confluence and Bookstack that
  are far more accessible in construction, contribution and navigation to a general audience. The
  knowledge base currently is being designed with new project members online that will need support
  that is immediately easy to follow to prevent them from getting lost or burnt out, and eventually
  the knowledge base will need to accommodate the clientele of the project who will benefit the most
  from a knowledge base built on a wiki foundation that is appealing to navigate. In addition, Thoth
  Tech does already utilize GitHub for its projects and for certain documentation, which works as
  intended, however, having a second GitHub platform for this project may cause uncertainty as to
  the purpose and content differences between the repository and the knowledge base. This might
  cause issues, for example multiple copies of certain documents existing simultaneously on both
  platforms, causing revisions to become desynchronised or lost. A distinct and separate platform
  would better serve the strengths necessary for this knowledge base to perform as intended for its
  target userbase.
- Vultr: Appeared capable of hosting Bookstack, however the initial payment for verification didn't
  appear appropriate for a project with restrictive economic concerns.
- OVHcloud: Also appeared to be practically viable for hosting Bookstack, but the prices of hosting
  were too costly so any trial or credits system would likely depreciate rapidly, not allowing for
  effective use in the future.
- [Deakin Public Hosting Web Cluster](https://acqol.com.au/): Found during research, but contact
  with the IT Service Desk retrieved uncertain responses, and there has been no follow-up since. In
  all likelihood, this service has either been discontinued or has been changed into a different
  service like the Google Cloud Platform. However, if a response does return positive, this service
  could be very promising given its availability due to the client being a Deakin Associate.
- DigitalOcean: Currently the most promising hosting service for hosting Bookstack, as many of the
  guides that demonstrate hosting Bookstack use this service to host the server. Allows a fairly
  lengthy free trial that could be extended through a service the platform provides for non-profit
  enterprises, and can be used in conjunction with Cloudflare for the domain and Cloudron for simple
  installation. The droplet created to host Bookstack may also be transferred across accounts, so
  hosting responsibilities can always be given to the most relevant individual (client, product
  lead, etc.). Should hosting not be possible through Deakin but Bookstack is still the favoured
  knowledge base platform, this is the most likely contender for hosting.

### Pros of Bookstack

- Open-source software that is continuously supported, has plenty of community support, and the lead
  developer of which is easily contactable and will provide support and troubleshooting through the
  appropriate channels.
- Easily understood structure concepts that follow a consistent theme that create a memorable
  production environment.
- Easily traceable revision system allowing demonstration of progress and contribution.
- Allows for WYSIWYG or Markdown editing that is great for adapting to project preference, and
  document creation that allows for simple implementation of interactive elements for a more
  effective learning/research experience.
- Deep organizational structure that allows for greater categorization that can be navigated even
  more easily with the addition of document metadata. Pros of Deakin Hosting:
- Recognisable domain that students and clientele can trust.
- Hosting will be accessible to and managed by the university hosting the unit the project is being
  worked under, allowing for troubleshooting and access to efficiently reach the appropriate
  individuals.
- Costs will correlate with purpose and traffic more closely as opposed to with an external hosting
  service with a tiered price system.

### Pros of Deakin Hosting

- Recognisable domain that students and clientele can trust.
- Hosting will be accessible to and managed by the university hosting the unit the project is being
  worked under, allowing for troubleshooting and access to efficiently reach the appropriate
  individuals.
- Costs will correlate with purpose and traffic more closely as opposed to with an external hosting
  service with a tiered price system.
