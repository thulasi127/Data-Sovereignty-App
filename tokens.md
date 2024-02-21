# Gitlab Agent Registration Token
Token: 8dyqxCfLq2TLpwd6Evs15PDnbKCbTdV4txYsbB4M3_92Rj-rtg

Docker command:
```
docker run --pull=always --rm \
registry.gitlab.com/gitlab-org/cluster-integration/gitlab-agent/cli:v14.8.1 generate \
--agent-token=8dyqxCfLq2TLpwd6Evs15PDnbKCbTdV4txYsbB4M3_92Rj-rtg \
--kas-address=wss://gitlab.socs.uoguelph.ca/-/kubernetes-agent/ \
--agent-version v14.8.1 \
--namespace gitlab-agent | rancher kubectl apply -f -
```

# Gitlab Registry Deploy Token

## Change docker-username, docker-password, docker-email, namespace
username: vizionagent
token: h9VvRmXGRyJTVs42YX_V
namespace: vizion
dockeremail: tjothira@uoguelph.ca

rancher context switch
rancher kubectl create namespace vizion

rancher kubectl create secret docker-registry regcred --namespace=vizion --docker-server=registry.socs.uoguelph.ca --docker-username=vizionagent --docker-password=h9VvRmXGRyJTVs42YX_V --docker-email=tjothira@uoguelph.ca
