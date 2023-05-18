import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  
  // Inject the HttpClient in the constructor
  constructor(private http: HttpClient) {}
  
  createJiraTicket(issueData: any) {
    const apiUrl = 'https://your-jira-instance/rest/api/2/issue';
    const headers = { Authorization: 'Basic yourBase64EncodedCredentials' };
  
    return this.http.post(apiUrl, issueData, { headers });
  }

}



