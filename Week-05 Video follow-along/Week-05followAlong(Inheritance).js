console.log(`Lt's talk about Inheritance.`);
//Let's talk about inheritance.

//Sometimes we have classes that might be similar and contain duplicate code.
//For example we may have two different classes that handle sending different types of email notifications to users.
    //One class sends promotional notifications
    //The other sends collection notifications for overdue accounts.
    //Each have considerable differences, but a good amount of shared code.
    //We can take that shared code and move it into a parent class, then have both of these classes inherit from that parent class.
    //That enables us to keep that common code in one place, and only need make changes in one place(if changes are ever needed.)
//Both the promotion sender class and collection sender class have to send a notification and both have to find users with a specific status to determine if it will send a notification to those users.


//The below methods could be used to find the specific users with a status, give them a discount, and would send a notification with that discount.

//LOOPED BACK TO TOP OF CODE FOR EXAMPLE!!!
class NotificationSender{
    constructor(status){
        this.status = status;
    }
    sendNotification(notification){
        console.log('Sending: ' + notification);
    }
    findUsersWithStatus(status){
        let users = getUsers(status);
        return users;
    }
}




class promotionSender extends NotificationSender {
    constructor(status){
        super(status);
    }
    
    calculateDiscount(status){
        if (status === 'GOLD'){
            return .3;
        } else if (status === 'SILVER'){
            return.15;
        }
        return 0;
    }
}

class CollectionsSender extends NotificationSender{
    constructor(status){
        super(status);
    }
    
    calculateFee(status){
        if (status === 'OVERDUE'){
            return 10;
        } else if (status === 'DELINQUENT'){
            return 25;
        }
        return 5;
    }
}

//In the above two classes, we can see a lot of similar code.
//The "sendNotification" and the "findUsersWithStatus" are identical in both.
//When we notice a pattern with multiple classes with a lot of the same code and a little or some difference, we extract the common code into a parent class, then inherit that into our "children" classes.
//This allows us the ability to manage that code in one place. 
//Makes maintainability a lot easier.

//We will nod do this above our two examples.

//The "extends" keyword is used to inherit from another class
//Super refers to the parent class. When it is followed by parentheses it refers to the parent class's constructor
//Super is similar to this keyword

let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('THIS IS A TEST COLLECTIONS NOTIFICATION.');