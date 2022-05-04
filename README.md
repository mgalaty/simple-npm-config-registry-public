# simple-npm-config-registry
Office Hours Challenge problem

Clone this git repo to your local disk and then use that to create a publicly visible git rep on github.com (the public one, not the IBM enterprise git repo). It is possible to get this working from the IBM enterprise git repo, but that is a separate excercise. 

##
This is a simple nodejs application that uses a module from a private npm_config_registry.  <br>
The private registry is:<br>
``` http://nexus.ex288-office-hours:8081/repository/ex288-npm/```

<ul>
  <li> Deploy this application to your default account ```userid-us``` </li>
  <li> Application name should be simple-npm </li>
 </ul>
 
 The application if deployed correctly will show this in the pod log:
```
Server running on port: 8080
This is a message from the demo package
```
The Last line is the key as it comes from the module that is located in the private repo.  This should be simple!
