# Middleman Semantic UI Template

A basic template for Middleman 4 including [Semantic UI 2.1.8](http://semantic-ui.com/)

## Getting Started

####Install Middleman

Install Xcode Command Line Tools (for OS X users)

`$ xcode-select --install`

Install Middleman 4

`$ gem install middleman`

####Start a New Project

Start a new project with the middleman-semantic-ui template

`$ middleman init -T james-weaver/middleman-semantic-ui YOUR_PROJECT_NAME`

You'll be asked if you want to enable [livereload](https://github.com/middleman/middleman-livereload) and if you want a `rack.ru` file


##Configuration

####CSS Modules
middleman-semantic-ui includes the default Semantic UI theme. You can edit which modules to include by commenting out the relevant lines in `source/stylesheets/semantic-ui/semantic-ui.scss`.

####JavaScript
middleman-semantic-ui includes  [jQuery 2.2.2](https://jquery.com/download/) and the default JavaScript modules. You can comment out the modules you don't require by editing `source/javascripts/vendor/jquery.min.js`

