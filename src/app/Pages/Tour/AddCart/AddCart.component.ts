import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './AddCart.component.html',
  styleUrls: ['./AddCart.component.scss']
})
export class AddcartComponent implements OnInit {

  tours = [
    {
      "bookdate": "2020-08-03T04:00:00.000Z",
      "bookingperiod": "",
      "category": "",
      "city": "Cape town",
      "company": "feelathome",
      "continent": "Africa",
      "country": "South Africa",
      "date": "",
      "departureTime": "",
      "description": "PGRpdiBjbGFzcz0iYWEtdG91ci1pdGluZXJhcnlfX3RleHQiIGl0ZW1wcm9wPSJkZXNjcmlwdGlvbiI+U3RhcnQgYW5kIGVuZCBpbiBDYXBlIFRvd24hIFdpdGggdGhlIGFkdmVudHVyZSB0b3VyIDYtRGF5IEdyb3VwIEdhcmRlbiBSb3V0ZSAmYW1wOyBBZGRvIEFkdmVudHVyZSBUb3VyLCB5b3UgaGF2ZSBhIDYgZGF5IHRvdXIgcGFja2FnZSB0YWtpbmcgeW91IHRocm91Z2ggQ2FwZSBUb3duLCBTb3V0aCBBZnJpY2EgYW5kIDEyIG90aGVyIGRlc3RpbmF0aW9ucyBpbiBTb3V0aCBBZnJpY2EuIDYtRGF5IEdyb3VwIEdhcmRlbiBSb3V0ZSAmYW1wOyBBZGRvIEFkdmVudHVyZSBUb3VyIGluY2x1ZGVzIGFjY29tbW9kYXRpb24gYXMgd2VsbCBhcyBhbiBleHBlcnQgZ3VpZGUsIG1lYWxzLCB0cmFuc3BvcnQgYW5kIG1vcmUuPC9kaXY+PGRpdj48YnI+PC9kaXY+",
      "discountitem": 0,
      "discounttype": "",
      "duration": "10 days",
      "faq": null,
      "featureimage": "https://cloudcalls.easipath.com/backend-dms/api/download/5a985f58024495259b47c",
      "id": "TR-21a5-4a96",
      "itinerary": "PGRpdiBjbGFzcz0iYW8tdG91ci1ibG9jayBqcy1hby10b3VyLWJsb2NrIGpzLWFvLXRvdXItaXRpbmVyYXJ5IGl0biI+PG9sPjxsaSBjbGFzcz0iaXRuLS1maXJzdCI+SW50cm9kdWN0aW9uPHNwYW4gY2xhc3M9ImRldF9fYXJyb3ciPjwvc3Bhbj48L2xpPjwvb2w+PG9sIGNsYXNzPSJkZXQiPjxsaT48aT4qUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGl0aW5lcmFyeSBpcyBzb21ldGltZXMgZG9uZSBpbiBhIGRpZmZlcmVudCBvcmRlcjwvaT48c3BhbiBjbGFzcz0iZGV0X19hcnJvdyI+PC9zcGFuPjwvbGk+PGxpPkRheSAxOiBDYXBlIFRvd24gJiM4MjExOyBIZXJtYW51cyAmIzgyMTE7IENhcGUgQWd1bGhhczxzcGFuIGNsYXNzPSJkZXRfX2Fycm93Ij48L3NwYW4+PC9saT48bGk+RGF5IDI6IENhcGUgQWd1bGhhcyAmIzgyMTE7IE91ZHRzaG9vcm48c3BhbiBjbGFzcz0iZGV0X19hcnJvdyI+PC9zcGFuPjwvbGk+PGxpPkRheSAzOiBPdWR0c2hvb3JuICYjODIxMTsgS255c25hICYjODIxMTsgU2VkZ2VmaWVsZDxzcGFuIGNsYXNzPSJkZXRfX2Fycm93Ij48L3NwYW4+PC9saT48bGk+RGF5IDQ6IFNlZGdlZmllbGQtIFRzaXRzaWthbW1hIC0gQWRkbzxzcGFuIGNsYXNzPSJkZXRfX2Fycm93Ij48L3NwYW4+PC9saT48bGk+RGF5IDU6IEFkZG8gJiM4MjExOyBXaWxkZXJuZXNzL01vc3NlbCBCYXk8c3BhbiBjbGFzcz0iZGV0X19hcnJvdyI+PC9zcGFuPjwvbGk+PGxpPkRheSA2OiBXaWxkZXJuZXNzL01vc3NlbCBCYXkgLSBDYXBlIFRvd248c3BhbiBjbGFzcz0iZGV0X19hcnJvdyI+PC9zcGFuPjwvbGk+PC9vbD48L2Rpdj48c2VjdGlvbiBjbGFzcz0iYW8tdG91ci1yZWFkLWxhdGVyLWN0YS1iYW5uZXIiPjxkaXYgY2xhc3M9ImFvLXRvdXItY3RhLWJhbm5lciI+PGRpdiBjbGFzcz0iYW8tdG91ci1jdGEtYmFubmVyX190b3AiPjxkaXYgY2xhc3M9ImFvLXRvdXItY3RhLWJhbm5lcl9faWNvbi13cmFwcGVyIj48L2Rpdj48L2Rpdj48L2Rpdj48L3NlY3Rpb24+",
      "language": "",
      "max_people": "20",
      "min_people": "10",
      "moredetails": {minimundaystobook: "2 days"},
      "name": "6-Day Group Garden Route & Addo Adventure Tour",
      "numberAdultSelected": "2",
      "numberChildrenSelected": "1",
      "numberInfantSelected": "2",
      "orgdatetime": "",
      "posteby": "acc.testcod@gmail.com",
      "program": "",
      "province": "Western Cape",
      "saleprice": 610,
      "status": "invisible",
      "subcategories": "",
      "t_exclude": "PHVsIGNsYXNzPSJqcy1hby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZCBhby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZCI+PGxpIGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGpzLWFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24gYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uLW5vdC1pbmNsdWRlZCI+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudCI+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AgYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AiPjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFhLXRleHQtaDYiPjwvZGl2PjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGpzLWFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24gYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uLW5vdC1pbmNsdWRlZCI+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudCI+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AgYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AiPjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFhLXRleHQtaDYiPjxzcGFuIGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX190aXRsZS10ZXh0Ij5GbGlnaHRzPC9zcGFuPjxkaXYgY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX2Fycm93Ij48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20gYW8tY29tbW9uLWFjY29yZGlvbl9fYm90dG9tIj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50IGpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbS1jb250ZW50IGFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbS1jb250ZW50Ij48ZGl2IGNsYXNzPSJqcy1hby10b3VyLWluY2x1ZGVkX19ub3QtaW5jbHVkZWQtaXRlbSI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9saT48bGkgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbiBhby1jb21tb24tYWNjb3JkaW9uLS1jb2xsYXBzZWQganMtYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGFvLXRvdXItaW5jbHVkZWRfX2FjY29yZGlvbiBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24tbm90LWluY2x1ZGVkIj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50Ij48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50LXRvcCBhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50LXRvcCI+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUgYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUgYWEtdGV4dC1oNiI+PHNwYW4gY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlLXRleHQiPkluc3VyYW5jZTwvc3Bhbj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19hcnJvdyI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fYm90dG9tIGFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbSI+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudCBqcy1hby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20tY29udGVudCBhby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20tY29udGVudCI+PGRpdiBjbGFzcz0ianMtYW8tdG91ci1pbmNsdWRlZF9fbm90LWluY2x1ZGVkLWl0ZW0iPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGpzLWFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24gYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uLW5vdC1pbmNsdWRlZCI+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudCI+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AgYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AiPjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFhLXRleHQtaDYiPjxzcGFuIGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX190aXRsZS10ZXh0Ij5PcHRpb25hbDwvc3Bhbj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19hcnJvdyI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fYm90dG9tIGFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbSI+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudCBqcy1hby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20tY29udGVudCBhby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20tY29udGVudCI+PGRpdiBjbGFzcz0ianMtYW8tdG91ci1pbmNsdWRlZF9fbm90LWluY2x1ZGVkLWl0ZW0iPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGpzLWFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24gYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uLW5vdC1pbmNsdWRlZCI+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudCI+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AgYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AiPjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFhLXRleHQtaDYiPjxzcGFuIGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX190aXRsZS10ZXh0Ij5BZGRpdGlvbmFsIFNlcnZpY2VzPC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGpzLWFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24gYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uLW5vdC1pbmNsdWRlZCI+PGRpdj48YnI+PC9kaXY+PC9saT48L3VsPg==",
      "t_highlight": "PHVsIGNsYXNzPSJhby10b3VyLWhpZ2hsaWdodHNfX2ZhY3RzLWxpc3QiPjxsaSBjbGFzcz0iYW8tdG91ci1oaWdobGlnaHRzX19mYWN0cy1pdGVtIj5XaW5uZXIgVG91ciBvZiB0aGUgWWVhciBBd2FyZCAyMDE5IC0gU291dGggQWZyaWNhPC9saT48bGkgY2xhc3M9ImFvLXRvdXItaGlnaGxpZ2h0c19fZmFjdHMtaXRlbSI+U3BvdCBjb2xvbmllcyBlbmRhbmdlcmVkIHBlbmd1aW5zPC9saT48bGkgY2xhc3M9ImFvLXRvdXItaGlnaGxpZ2h0c19fZmFjdHMtaXRlbSI+UmVsYXggaW4gdGhlIHNlYXNpZGUgdG93biBvZiBIZXJtYW51czwvbGk+PGxpIGNsYXNzPSJhby10b3VyLWhpZ2hsaWdodHNfX2ZhY3RzLWl0ZW0iPkJlIGJyYXZlIGFuZCBnbyBzaGFyayBjYWdlIGRpdmluZzwvbGk+PGxpIGNsYXNzPSJhby10b3VyLWhpZ2hsaWdodHNfX2ZhY3RzLWl0ZW0iPkVuam95IHVuZm9yZ2V0dGFibGUgd2luZSB0YXN0aW5nczwvbGk+PC91bD4=",
      "t_inclued": "PHVsIGNsYXNzPSJqcy1hby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZCBhby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZCI+PGxpIGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGpzLWFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24gYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uLWluY2x1ZGVkIj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50Ij48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50LXRvcCBhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50LXRvcCI+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUgYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUgYWEtdGV4dC1oNiI+PC9kaXY+PC9kaXY+PC9kaXY+PC9saT48bGkgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbiBhby1jb21tb24tYWNjb3JkaW9uLS1jb2xsYXBzZWQganMtYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGFvLXRvdXItaW5jbHVkZWRfX2FjY29yZGlvbiBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24taW5jbHVkZWQiPjxkaXYgY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQiPjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQtdG9wIGFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQtdG9wIj48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX190aXRsZSBhby1jb21tb24tYWNjb3JkaW9uX190aXRsZSBhYS10ZXh0LWg2Ij48c3BhbiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUtdGV4dCI+QWNjb21tb2RhdGlvbjwvc3Bhbj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19hcnJvdyI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fYm90dG9tIGFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbSI+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudCBqcy1hby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20tY29udGVudCBhby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20tY29udGVudCI+PGRpdiBjbGFzcz0ianMtYW8tdG91ci1pbmNsdWRlZF9faW5jbHVkZWQtaXRlbSI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9saT48bGkgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbiBhby1jb21tb24tYWNjb3JkaW9uLS1jb2xsYXBzZWQganMtYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGFvLXRvdXItaW5jbHVkZWRfX2FjY29yZGlvbiBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24taW5jbHVkZWQiPjxkaXYgY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQiPjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQtdG9wIGFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQtdG9wIj48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX190aXRsZSBhby1jb21tb24tYWNjb3JkaW9uX190aXRsZSBhYS10ZXh0LWg2Ij48c3BhbiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUtdGV4dCI+R3VpZGU8L3NwYW4+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fYXJyb3ciPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbSBhby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20iPjxkaXYgY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQganMtYW8tY29tbW9uLWFjY29yZGlvbl9fYm90dG9tLWNvbnRlbnQgYW8tY29tbW9uLWFjY29yZGlvbl9fYm90dG9tLWNvbnRlbnQiPjxkaXYgY2xhc3M9ImpzLWFvLXRvdXItaW5jbHVkZWRfX2luY2x1ZGVkLWl0ZW0iPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGpzLWFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24gYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uLWluY2x1ZGVkIj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50Ij48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50LXRvcCBhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50LXRvcCI+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUgYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUgYWEtdGV4dC1oNiI+PHNwYW4gY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlLXRleHQiPk1lYWxzPC9zcGFuPjxkaXYgY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX2Fycm93Ij48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20gYW8tY29tbW9uLWFjY29yZGlvbl9fYm90dG9tIj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50IGpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbS1jb250ZW50IGFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbS1jb250ZW50Ij48ZGl2IGNsYXNzPSJqcy1hby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZC1pdGVtIj48ZGl2IGNsYXNzPSJhby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZC1pdGVtLWluY2x1ZGVkLW1lYWxzIj48ZGl2IGNsYXNzPSJqcy1hby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZC1pdGVtLWluY2x1ZGVkLW1lYWxzLWl0ZW0gYW8tdG91ci1pbmNsdWRlZF9faW5jbHVkZWQtaXRlbS1pbmNsdWRlZC1tZWFscy1pdGVtIGZvb2QtdmVnZXRhcmlhbiB0dGlwIiB0aXRsZT0iIj48L2Rpdj48ZGl2IGNsYXNzPSJqcy1hby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZC1pdGVtLWluY2x1ZGVkLW1lYWxzLWl0ZW0gYW8tdG91ci1pbmNsdWRlZF9faW5jbHVkZWQtaXRlbS1pbmNsdWRlZC1tZWFscy1pdGVtIGZvb2QtdmVnYW4gdHRpcCIgdGl0bGU9IiI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9saT48bGkgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbiBhby1jb21tb24tYWNjb3JkaW9uLS1jb2xsYXBzZWQganMtYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGFvLXRvdXItaW5jbHVkZWRfX2FjY29yZGlvbiBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24taW5jbHVkZWQiPjxkaXYgY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQiPjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQtdG9wIGFvLWNvbW1vbi1hY2NvcmRpb25fX2NvbnRlbnQtdG9wIj48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX190aXRsZSBhby1jb21tb24tYWNjb3JkaW9uX190aXRsZSBhYS10ZXh0LWg2Ij48c3BhbiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fdGl0bGUtdGV4dCI+VHJhbnNwb3J0PC9zcGFuPjxkaXYgY2xhc3M9ImFvLWNvbW1vbi1hY2NvcmRpb25fX2Fycm93Ij48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uX19ib3R0b20gYW8tY29tbW9uLWFjY29yZGlvbl9fYm90dG9tIj48ZGl2IGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX19jb250ZW50IGpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbS1jb250ZW50IGFvLWNvbW1vbi1hY2NvcmRpb25fX2JvdHRvbS1jb250ZW50Ij48ZGl2IGNsYXNzPSJqcy1hby10b3VyLWluY2x1ZGVkX19pbmNsdWRlZC1pdGVtIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2xpPjxsaSBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbiBhby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBqcy1hby1jb21tb24tYWNjb3JkaW9uLS1jb2xsYXBzZWQgYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uIGFvLXRvdXItaW5jbHVkZWRfX2FjY29yZGlvbi1pbmNsdWRlZCI+PGRpdiBjbGFzcz0iYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudCI+PGRpdiBjbGFzcz0ianMtYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AgYW8tY29tbW9uLWFjY29yZGlvbl9fY29udGVudC10b3AiPjxkaXYgY2xhc3M9ImpzLWFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFvLWNvbW1vbi1hY2NvcmRpb25fX3RpdGxlIGFhLXRleHQtaDYiPjxzcGFuIGNsYXNzPSJhby1jb21tb24tYWNjb3JkaW9uX190aXRsZS10ZXh0Ij5BZGRpdGlvbmFsIFNlcnZpY2VzPC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJqcy1hby1jb21tb24tYWNjb3JkaW9uIGFvLWNvbW1vbi1hY2NvcmRpb24gYW8tY29tbW9uLWFjY29yZGlvbi0tY29sbGFwc2VkIGpzLWFvLWNvbW1vbi1hY2NvcmRpb24tLWNvbGxhcHNlZCBhby10b3VyLWluY2x1ZGVkX19hY2NvcmRpb24gYW8tdG91ci1pbmNsdWRlZF9fYWNjb3JkaW9uLWluY2x1ZGVkIj48ZGl2Pjxicj48L2Rpdj48L2xpPjwvdWw+",
      "time": "",
      "totAdultPrice": 4000,
      "totCartPrice": 18000,
      "totChildPrice": 6000,
      "totInfantPrice": 8000,
      "type": "daily tour"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  checkoutCartTour() {}
  emptyCart(tour) {}
  deleteSingleTour() {}

}
