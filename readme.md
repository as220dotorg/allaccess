# AS220 All Access

A quick-and-dirty static site for the campaign while we build out the Drupal theme.

## Stuff to download and install

[Node JS](https://nodejs.org/en/) _(Use the 8.x.x version. Note: we had to do some other stuff to get this working on Dave's old Mac OS)_

[Tower Git Client](https://www.git-tower.com/mac/) _(Demo is OK for now)_

[Atom Editor](https://atom.io)

[Bitbucket](https://bitbucket.org/product) _(Sign up for a free account so I can share the git repository)_

Get on the as2point20.slack.com Slack channel.


## Up and running

1. Get Tower.app set up and clone the repositiory. (I'll show you how to do this.)
2. Open Terminal.app and go to the project directory, something like `cd ~/Documents/Projects/as220-all-access` _(Adjust the file path to where you cloned the repository in Tower.app)_.
3. Install Grunt, `npm install -g grunt-cli`, and `npm install -g grunt` _(Note: we had to install this globally with sudo to get things working on Dave's old Mac OS.)_
2. Install the node modules: `npm install`
4. Run the command `grunt build`. This should compile the site into the `output` directory.
5. Run the command `grunt server`. This should pop open a browser with the compiled site.

#### To make things easier for you

Install these Atom packages:

* emmet
* atom-beautify
* atom-handlebars

Here's how to [install Atom packages](https://flight-manual.atom.io/using-atom/sections/atom-packages/).


## To make changes

#### Overview of the process

1. Get most current revision from the master git repostory
2. Make changes to files and review the site locally
3. Commit changes and push the revisions to the master git repostory
4. Upload the compiled files to the web server via ftp.

#### Specific steps

1. Get most current revision from the master git repostory
	* Open Tower.app
	* Open the project and click "Pull"
	* Open Terminal.app and change to your project directory, example `cd ~/Documents/Projects/as220-all-access`
	* Type `grunt` to complie the code and launch a local version of the site. This should pop open a browser with the compiled site. It will update as you make changes to the files. 
2. Make change to files and review the site locally
	* Edit the files in `/tempates/pages`. They will compile to `/output`.
3. Commit changes and push the revisions to the master git repostory
	* Once you are satisfied with the changes on your local copy of the site, check them in by going to Tower.app, select "Stage All", add a comment, and click "Commit". Be sure to enter a comment describing the purpose of your changes. This helps other developers troubleshoot and monitor the progress of the project.
	* Click "Push" to send the changes to the master repository.
4. Upload the compiled files to the web server via ftp.
	* Use your FTP client to connect to the web server.
	* Upload the files from the `output` directory. The should overwrite the files on the server. If you did no change the images you only need to update the HTML files. 

#### Other info

* Todd has Photoshop templates for correctly sizing the big hero photos. The hero photos are added to the fontmatter like this: `hero: black-box.jpg`.
* If you want to change the navigation titles or links, look in `source/data/nav.json`.
* The text for the donate form is in `source/templates/partials/donate-form.hbs`.
* CSS is compiled from SASS in `source/sass/`. See Todd if you want to edit this as it's a bit more complex.
* To add a new page, copy one in `source/templates/pages` and edit the coment. Be sure to change the page title in the frontmatter at the top of the file. To add the new page to the navigation use `source/data/nav.json`. 





