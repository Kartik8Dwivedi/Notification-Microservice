# Notification Microservice
 - This microservice is a part of 'Airline Management Backend' system, for more info refer to the main repository for more details. 
 - This microservice handles the mailing service required for ticket booking.
 - In this repository we have used GMAIL's SMTP server to set up the mailing service, and have used node-cron to handle the cron jobs for reminder service. 
 - Along with this we have used a Notification-Ticket model which stores the data of the recipients who we will send the notification through the mail. Later we will also integerate the reminder service through mobile SMS as well.
 - We have also integrated the system design of message-queues whereby we will scale up the backend system using RabbitMQ (Earlier we had used kafka but we have switched to RabbitMQ for learning purpose).

## Microservice repositories
 - ### AirHub-Airline-Management-System Microservice
      - For booking the flight tickets and message queues
      - [https://github.com/Kartik8Dwivedi/Booking-Microservice](https://github.com/Kartik8Dwivedi/Ticketing-Microservice)
 - ### Ticketing Microservice
      - For booking the flight tickets and message queues
      - [https://github.com/Kartik8Dwivedi/Booking-Microservice](https://github.com/Kartik8Dwivedi/Ticketing-Microservice)
 - ### Authentication and Authorization microservice
      - For authentication logic
      - [https://github.com/Kartik8Dwivedi/Auth-Microservice](https://github.com/Kartik8Dwivedi/Authentication-and-Authorization-microservice)
 - ### Api Endpoint Gateway microservice
      - For api endpoint switch to particular microservice; the role of this microservice in majorly for deployment
      - https://github.com/Kartik8Dwivedi/API-Endpoint-Gateway
 - This backend system was active on AWS EC2 instance earlier, currently it is terminated. The containerized version of this system will be committed soon!
