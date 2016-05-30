angular.module('Directives',[])

.directive('home', Home)
.directive('about', About)
.directive('projects', Projects)
.directive('contact', Contact)
.directive('navBar', NavigationBar)
// .directive('resume', Resume)

function Home() {
    return {
        templateUrl: 'templates/home.html',
        type: 'E'
    }
}

function About() {
	return {
		templateUrl: 'templates/about.html',
		type: 'E'
	}
}

function Projects() {
	return {
		templateUrl: 'templates/projects.html',
		type: 'E'
	}
}

function Contact() {
	return {
		templateUrl: 'templates/contact.html',
		type: 'E'
	}
}

function NavigationBar() {
	return {
		templateUrl: 'templates/navBar.html',
		type: 'E'
	}
}