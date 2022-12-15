import './Gallery.css'
import AWS from 'aws-sdk'
import { useEffect, useState } from 'react'

	// get item list
	// Conditional rendering
	const bucketname = 'rvaluesfirstbucket'
	AWS.config.region = 'ap-northeast-1'; // Region
	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: 'ap-northeast-1:5aec9ad4-0bba-4650-8d4b-745e1908e617',
	});

	var s3 = new AWS.S3({
		apiVersion: '2006-03-01',
		params: {Bucket: bucketname}
	  });

	const listfiles = () => {
		s3.listObjects(function(err, data) {
			if (err) {
			  return alert('There was an error listing your albums: ' + err.message);
			} else {
			//   var folders = data.CommonPrefixes.map(function(commonPrefix) {
			// 	var prefix = commonPrefix.Prefix;
			// 	var foldername = decodeURIComponent(prefix.replace('/', ''));
			// 	return foldername;
			//   });
			//   var message = folders.length ?
			// 	console.log("Folders found: ") : console.log("No folder found");
			  console.log(data.Contents.map((content) => {
				return decodeURIComponent(content.Key)
			  }));
			}
		  });
	}
	const listfolders = () => {
		s3.listObjects({Delimiter: '/'}, function(err, data) {
			if (err) {
			  return alert('There was an error listing your albums: ' + err.message);
			} else {
			  var folders = data.CommonPrefixes.map(function(commonPrefix) {
				var prefix = commonPrefix.Prefix;
				var foldername = decodeURIComponent(prefix.replace('/', ''));
				return foldername;
			  });
			  var message = folders.length ?
				console.log("Folders found: ") : console.log("No folder found");
			  console.log(folders);
			}
		  });
	}

	// useEffect(() => {
	// 	viewcontent();
	// }, [])
	function viewcontent (filename, func)  {
		var fileKey = encodeURIComponent(filename);
		let res = ''
		// Must use function() here as it will restrict the scope of this to s3 instance
		// s3.listObjects(function (data,err) {
		// 	var href = this.request.httpRequest.endpoint.href;
		// 	var bucketUrl = href + bucketname + '/';
		// 	var fileUrl = bucketUrl + fileKey;
		// 	console.log(fileUrl)
		s3.getObject({Key:fileKey}, (err, data) => {
				res = decodeURIComponent(data.Body);
				func(res)
				console.log(res)
			})
		// })
	}

	const editContent = (filename, data) => {
		var fileKey = encodeURIComponent(filename);
		s3.putObject({ Key: fileKey, Body: data }, function(err, d) {
			// if (err) {
			// 	return alert("There was an error creating your album: " + err.message);
			// }
		});
	}

	const matchEntry = (e1, e2) => {
		console.log("Match entry")
		console.log(e1)
		console.log(e2)
		if (e1["turn"] === e2["turn"] && ((e1["team1"] === e2["team1"] && e1["team2"] === e2["team2"]) || (e1["team2"] === e2["team1"] && e1["team1"] === e2["team2"])))
		{
			console.log("True")
			return true
		}
		else
		{
			console.log("False")
			return false
		}
	}

	const updateForm = (newEntry) => {

		let contents = ""
		viewcontent("recordsForm", (d) => {
			contents = d
			let content_ = JSON.parse(contents)

			if (!content_['started']) {
				alert("Game not started")
			}

			content_["data"] = content_["data"].map((entry) => {
				if (matchEntry(entry, newEntry)) {
					return newEntry
				}
				else return entry
			})
		
			console.log("New content_:")
			console.log(content_)
			editContent("recordsForm", JSON.stringify(content_))
		})
	}

	const resetForm = () => {
		const template = {
			"started":false,
			"data": [
			{
				"team1":1,
				"team2":2,
				"turn": "duo1",
				"points1":0,
				"points2":0
			},
			{
				"team1":2,
				"team2":3,
				"turn": "solo",
				"points1":0,
				"points2":0
			},
			{
				"team1":3,
				"team2":4,
				"turn": "duo2",
				"points1":0,
				"points2":0
			},
			{
				"team1":4,
				"team2":5,
				"turn": "duo1",
				"points1":0,
				"points2":0
			},
			{
				"team1":5,
				"team2":1,
				"turn": "solo",
				"points1":0,
				"points2":0
			},
			{
				"team1":1,
				"team2":2,
				"turn": "duo2",
				"points1":0,
				"points2":0
			},
			{
				"team1":2,
				"team2":3,
				"turn": "duo1",
				"points1":0,
				"points2":0
			},
			{
				"team1":3,
				"team2":4,
				"turn": "solo",
				"points1":0,
				"points2":0
			},
			{
				"team1":4,
				"team2":5,
				"turn": "duo2",
				"points1":0,
				"points2":0
			},
			{
				"team1":5,
				"team2":1,
				"turn": "duo1",
				"points1":0,
				"points2":0
			},
			{
				"team1":1,
				"team2":2,
				"turn": "solo",
				"points1":0,
				"points2":0
			},
			{
				"team1":2,
				"team2":3,
				"turn": "duo2",
				"points1":0,
				"points2":0
			},
			{
				"team1":3,
				"team2":4,
				"turn": "duo1",
				"points1":0,
				"points2":0
			},
			{
				"team1":4,
				"team2":5,
				"turn": "solo",
				"points1":0,
				"points2":0
			},
			{
				"team1":5,
				"team2":1,
				"turn": "duo2",
				"points1":0,
				"points2":0
			}
		]
	}
		editContent("recordsForm", JSON.stringify(template))
	}

	const resetNames = () => {
		const names = {
			"names": [
				"",
				"",
				"",
				"",
				""
			]
		}
		editContent("teamName", JSON.stringify(names))
	}

	const handleClick = () => {
		// viewcontent('tmp2')
		editContent('tmp2', 'ohhhhhhhhhhh');
		// listfiles();
		// listfolders();
	}

export {editContent, viewcontent, resetForm, resetNames, updateForm};