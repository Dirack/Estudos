# Kubernetes


## Rodar cluster kubernetes com minikube

```
kubectl version

minikube start --driver=virtualbox

minikube status

kubectl get nodes

kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.10

kubectl expose deployment hello-minikube --type=NodePort --port=8080

minikube service hello-minikube --url

kubectl delete services hello-minikube

kubectl delete deployment hello-minikube
```
