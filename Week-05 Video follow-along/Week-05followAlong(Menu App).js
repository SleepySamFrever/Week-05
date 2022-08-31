//Let's create a menu driven app using prompts that allows us to manage teams, and players on those teams.

//First we need some classes
//Here is our Player class
class Player{
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
    describe(){
        return `${this.name} plays ${this.position}.`;
    }
}

class Team{
    constructor(name){
        this.name = name;
        //Each time we create a team, we are also going to have an array that holds all the player on that team.
        //When we have a new team, we have a blank array so we do that in a constructor.
        this.players = [];
    }
    //create a method called addPlayer that will take a player
    addPlayer(player){
        //Method will check to see if that player is an instance of our player class
        //That way someone can't pass into our array a random string, number, etc. We wan to make sure it's actually a payer itself'
        //! That's what the "instanceof operator does"
        if (player instanceof Player){
            this.players.push(player);
        //This will throw an error that prints a detailed message that will tell someone exactly what they did wrong.  
        } else {
            throw new Error(`You can only add an instance Player. Argument is not a player: ${player}`)
        }
    }
    //Here we will add a describe method for our team.
    describe(){
        //This will print the name of the team and how many players are on the team.
        return `${this.name} has ${this.player.length} players.`;
    }
}

//Now let's create the menu class. The menu itself
//This is what drives the appication and all the choices
class Menu {
    constructor(){
        //We can have multiple teams inside this application.
        this.teams = [];
        //We will also create a variable for whatever team we have selected.
        //Whenever we are manager teams, we are going to be managing one team at a time.
        //Set it to null to start because when we start we have no team selected.
        this.selectedTeam = null;
    }
    //Here we will add a method onto our menu. Start
    //This is what wil start up the menu application.
    //Almost like the entry point to our application.
    start() {
        //We are going to start using methods that don't exist yet to build out our menu(How it's going to look).
        //Then we are going to implement those methods, this is called a "Top down development approach".
        //We start at the top and say "We need to build these methods, these are the methods that are gong to be used". Then we go ahead and implement those methods.
        let selection = this.showMainMenuOptions();
        //The "selection" is a variable we are going to use to get user input of what option in our menu has the user selected.
        //Our showMainMenuOptions method will return the selection that the user gives us.
        while (selection != 0 ) {
            //We need to determine what the user selected, and do something based off it.
            //Here will use a "switch" that looks at the selection.
            switch (selection) {
                //If they selected 1, then we are going to create a team.
                //Again, these methods doesn't exist yet. We are using them as placeholders, then go back and implement them.
                case '1':
                    this.createTeam();
                    break;
                //If they selected 2 then we will view a specific team
                case '2':
                    this.viewTeam();
                    break;
                //If they selected 3 we will delete a team.
                case '3':
                    this.deleteTeam();
                    break;
                //If they selected 4 we will display all the teams.
                case '4':
                    this.displayTeams();
                    break
                //Now, if they selected anything else, we use a default that sets selection equal to 0.
                default:
                    selection = 0;
            }
            //Here(outside of our switch) we want to get the selection again so that it keeps looping as long as we don't select 0 or something other than 1-4(our number of cases).
            selection = this.showMainMenuOptions();
        }
        //If they select 0
        alert('Goodbye!');
        
    }
    //Now we need to program the implementaion of these methods that we're going to have in our application.
    showMainMenuOptions(){
        //The following will return a prompt (a pop up box that asks user for input).  What we're returning is the input that comes back from that prompt.
        //We will use a template literal here. It's nice because we don't have to concatenate or add new line characters. We can just put each menu item on it's own line, and it will show up that way in the prompt.
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);//Above is our method to show menu options. It's going to show the menu, allow the user to select something, we get that number back, and based on that number we do one of the following things.
    }
    //Here we are going to add the "show team" menue options. This will take the team info and print it, return prompt.
    showTeamMenuOptions(teamInfo) {
        return prompt(`
        0) back
        1) create player
        2) delete player
        -------------------
        ${teamInfo}
        `);
    }

    //Next we'll implement displayTeams
    displayTeams() {
        //We'll put a blank string here because what we need to do is build a string that has all the information for the teams so we can put it in a message box or prompt.
        let teamString = '';
        //Now we need a loop to iterate through our teams.
        for (let i = 0; i < this.teams.length; i++) {
            //Now we concatenate all the team information.
            //We use this.teams[i] to grab the name of the team for this iteration of the loop.
            // '\n' will create a new line.
            teamString += i + ') ' + this.teams[i].name + '\n'
            /*what the above will do:
            Create a blank string.
            Itrerate through our teams.
            Grab each team.
            Get the name for that specific team.
            Add a new line so that all the team names will show up with an index numbering them on a different line.*/
        }
        //Now, outside our for loop we alert our teamString.
        //This way we can see all the teams.
        alert(teamString);
    }
    //Next we'll implement our createTeam method.
    createTeam() {
        //We'll prompt the user for a name to give to the new team.
        let name = prompt('Enter name for new team');
        //Using "new", we create a new instance of an object or a class. We pass in the name from our user input. That team gets pushed to our teams array.
        this.teams.push(new Team(name));
    }
    //Next we'll implement our viewTeam method to view the details of a specific team.
    viewTeam() {
        //We start by asking the user what team they want to view.
        //To do this we will prompt them to enter the index of the team which they wish to view.
        let index = prompt('Enter the index of the team you wish to view:')
        //Once we get that index we will be able to find the team.
        //Let's add a little bit of validation
        //Because if the input was less than 0 or greater than the length of our teams array, we'd get an error. It' important to validate user input.
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            //Now we've validated our index and set our selected team class property to the team that was input by the user.
            //Now we can start building a description for the team to print out.
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';
            //Now we want to add the description of all the players to the team.
            //We'll use a loop to do this by iterating through the players array for the selected team.
            for (let i =0; i < this.selectedTeam.players.length; i++){
                //In here we're going to add onto our description.
                description += i + ') ' + this.selectedTeam.players[i].name + '-' + this.selectedTeam.players[i].position + '\n';
            }//The above code will print a list of all the team players.
            //In a top down manner, we will now create this next method, even though we haven't "built" it yet.
            //We will pass in the description we just built up to our "show team menu options."
            //We are gong to implement this method(showTeamMenuOptions) and implement it to display the team and show all the options for the team.
            //This selection variable here is different from the one we used before. We are in a submenu. This selection's scope is within "viewTeam".
            let selection = this.showTeamMenuOptions(description);
            //Now we'll add a switch.
            switch(selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }
    deleteTeam(){
        let index = prompt('Enter the index of the team you wish to delete: ');
        if(index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }
    createPlayer(){
        let name = prompt('Enter name for new player: ');
        let position = prompt('Enter position for new player: ');
        this.selectedTeam.players.push(new Player(name, position));
    }
    deletePlayer() {
        let index = prompt('Enter the index of the player you wish to delete: ');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        }
    }
}

//Before we can test our code, we have to create an instance of our menu.

let menu = new menu();
//Now we use our "start" method which shows everything.
menu.start();