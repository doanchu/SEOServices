import Ember from 'ember';

	var objs =  [{
    id: 1,
    name: 'Campaign 1',
    description: 'Campaign for maylocnuoc',
    projects: [
    	{	
		    id: 1,
		    name: 'AC 01',
		    module: 'Account Creation',
		    lastModifiedDate: '2014/2/3',
		    status: 'new',
		    schedule: '',		    
		  },		  
		  {
		    id: 3,
		    name: 'SN 01',
		    module: 'Social Network',
		    lastModifiedDate: '2014/2/3',
		    status: 'success',
		    schedule: ''
		  },
		  {
		    id: 4,
		    name: 'SB 01',
		    module: 'Social Bookmark',
		    lastModifiedDate: '2014/2/3',
		    status: 'fail',
		    schedule: ''
		  }],
    accountprofiles: [
    	  {
		    id: 2,
		    name: 'P 02',
		    profiledetails: [
		    	{
				    id: 1,
				    site: 'wordpress.com',
				    username: 'tranvana',
				    password: 'abcd1234',
				    email: 'tranvana@hotmail.com'
				  },
				  {
				    id: 3,
				    site: 'tumblr.com',
				    username: 'tranvana',
				    password: 'abcd1234',
				    email: 'tranvana@hotmail.com'
				  }
		    ] ,
		    count: 2
		  },
		  {
		    id: 3,
		    name: 'P 03',
		    profiledetails: [
		    	{
			    id: 1,
			    site: 'wordpress.com',
			    username: 'tranvana',
			    password: 'abcd1234',
			    email: 'tranvana@hotmail.com'
			  },
			  {
			    id: 2,
			    site: 'blog.com',
			    username: 'tranvana1',
			    password: 'abcd1234',
			    email: 'tranvana@hotmail.com'
			  },
			  {
			    id: 3,
			    site: 'tumblr.com',
			    username: 'tranvana',
			    password: 'abcd1234',
			    email: 'tranvana@hotmail.com'
			  }
		    ] ,
		    count: 3
		  }],
    urllists: [{
		    id: 2,
		    name: 'U 02',
		    count: 4,
		    urldetails: [
		    			{
					    id: 1,
					    site: 'wordpress.com',
					    module: 'Social Network',
					    url: 'http://wordpress.com/blogs/tieu-de-01',
					    linkonpage: 'http://abc.com|http://ab.com',
					    anchortext: 'tieu de 01',
					    edit: '2014/3/2',
					    urllist: 1,
					    modules: ['Social Network', 'Social Bookmark']

					  },
					  {
					    id: 2,
					    site: 'blog.com',
					    module: 'Social Network',
					    url: 'http://blogs.com/blogs/tieu-de-01',
					    linkonpage: 'http://abc.com|http://ab.com',
					    anchortext: 'tieu de 01',
					    edit: '2014/3/2',
					    urllist: 2
					    
					  },
					  {
					    id: 3,
					    site: 'tumblr.com',
					    module: 'Social Bookmark',
					    url: 'http://tumblr.com/blogs/tieu-de-01',
					    linkonpage: 'http://abc.com|http://ab.com',
					    anchortext: 'tieu de 01',
					    edit: '2014/3/2',
					    urllist: 3
					  },
					  {
					    id: 4,
					    site: 'livejournal.com',
					    module: 'Social Network',
					    url: 'http://livejournal.com/blogs/tieu-de-01',
					    linkonpage: 'http://abc.com|http://ab.com',
					    anchortext: 'tieu de 01',
					    edit: '2014/3/2',
					    urllist: 3
					    
					  }
		    ],
		    campaign: 2
		  }]
  },
  {
    id: 2,
    name: 'Campaign Test 2',    
    description: 'Campaign for do go huong mac',
    projects: [
    	{	
		    id: 1,
		    name: 'AC 01',
		    module: 'Account Creation',
		    lastModifiedDate: '2014/2/3',
		    status: 'new',
		    schedule: '',		    
		  },
		  {
		    id: 2,
		    name: 'AC 02',
		    module: 'Account Creation',
		    lastModifiedDate: '2014/12/4',
		    status: 'running',
		    schedule: ''
		  },
		  {
		    id: 3,
		    name: 'SN 01',
		    module: 'Social Network',
		    lastModifiedDate: '2014/2/3',
		    status: 'success',
		    schedule: ''
		  },
		  {
		    id: 4,
		    name: 'SB 01',
		    module: 'Social Bookmark',
		    lastModifiedDate: '2014/2/3',
		    status: 'fail',
		    schedule: ''
		  }],
    accountprofiles: [
    	  {
		    id: 2,
		    name: 'P 02',
		    profiledetails: [{
						    id: 2,
						    name: 'P 02',
						    profiledetails: [1,3] ,
						    count: 2
						  },
						  {
						    id: 3,
						    name: 'P 03',
						    profiledetails: [1,2,3] ,
						    count: 3
  			}] ,
		    count: 2
		  },
		  {
		    id: 3,
		    name: 'P 03',
		    profiledetails: [{
						    id: 1,
						    name: 'P 01',
						    profiledetails: [1,2] ,
						    count:2
						  },
						  {
						    id: 2,
						    name: 'P 02',
						    profiledetails: [1,3] ,
						    count: 2
						  },
						  {
						    id: 3,
						    name: 'P 03',
						    profiledetails: [1,2,3] ,
						    count: 3
						  }] ,
		    count: 3
		  }],
    urllists: [{
		    id: 2,
		    name: 'U 02',
		    count: 1,
		    urldetails: [{
					    id: 2,
					    site: 'blog.com',
					    module: 'Social Network',
					    url: 'http://blogs.com/blogs/tieu-de-01',
					    linkonpage: 'http://abc.com|http://ab.com',
					    anchortext: 'tieu de 01',
					    edit: '2014/3/2',
					    urllist: 2
					    
					  }],
		    campaign: 2
		  }]
  }];
	
export default Ember.Route.extend({
	model: function(params) {
		var obj = objs.get(params.campaign_id);//this.store.find("campaign", params.campaign_id);
		return obj;
	}
	
});

