# Call WebAPI from Javascript - without JasonWebToken

Call WebAPI from Javascript - without JasonWebToken allows Javascript to perform CRUD Operations (GET, POST) from CoreDemoWebAPI (ie. project without JSON Tokens).


## Pre-Requisites
The following are mandatory for the CoreDemoWebAPI application to run:

1. Microsoft .NET Core 5.0 Runtime or SDK.
2. Microsoft SQL Server. 
3. CoreDemoWebAPI (ie. project without JSON Tokens).


## Installation

1. Run Visual Studio 2019
2. Clone CoreDemoWebAPI (ie. project without JSON Tokens) which is in GitHub ie. main branch.
	

## Usage

You need to run the CoreDemoWebAPI which will launch browser.
Open file, 'index.html' from this project in Chrome Browser.

Right mouse click and select 'Inspect' from the menu.
Click on 'Console' tab.


It will display errors as in screenshot file, 'ScreenShot_Error_WorkLaptop.jpg'.


I copied the project onto my personal laptop, and installed Chrome Extension, 'Moesif Origin & CORS Changer'
and enabled this 'ON'. 

---> api/staffmembers/read 
then worked on my personal laptop. See 'Screenshot_Output_GET.jpg'.


However, api/staffmembers/create
failed to work on my personal laptop. See 'Screenshot_Error_DueToPost_In_GoogleChrome_Console.jpg'.



IMPORTANT NOTES:

api/staffmembers/read 
api/staffmembers/create

both worked via PostMan but running through Google Chrome, there are additional security issues.
I shall revisit this at a later time and plus I shall discuss with Brynjar at the next Dev Catch up meeting.



## License & Copyright

(c) 2022 Arvinder Anand (Tim)
