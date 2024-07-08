const routes = {
  // production
  "docker.ikankan.eu.org": "https://registry-1.docker.io",
  "quay.ikankan.eu.org": "https://quay.io",
  "gcr.ikankan.eu.org": "https://gcr.io",
  "k8s-gcr.ikankan.eu.org": "https://k8s.gcr.io",
  "k8s.ikankan.eu.org": "https://registry.k8s.io",
  "ghcr.ikankan.eu.org": "https://ghcr.io",
  "cloudsmith.ikankan.eu.org": "https://docker.cloudsmith.io",
};
import DOCS from './help.html'
 
// return docs
if (url.pathname === "/") {
  return new Response(DOCS, {
    status: 200,
    headers: {
      "content-type": "text/html"
    }
  });
}
