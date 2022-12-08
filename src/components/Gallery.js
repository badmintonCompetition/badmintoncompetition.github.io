import './Gallery.css'
import AWS from 'aws-sdk'
import { useEffect, useState } from 'react'

const Gallery = () => {
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

	const [contents, setContents] = useState('')
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
	const viewcontent = (filename) => {
		var fileKey = encodeURIComponent(filename);
		// Must use function() here as it will restrict the scope of this to s3 instance
		s3.listObjects(function (data,err) {
			var href = this.request.httpRequest.endpoint.href;
			var bucketUrl = href + bucketname + '/';
			var fileUrl = bucketUrl + fileKey;
			console.log(fileUrl)
			s3.getObject({Key:fileKey}, (err, data) => {
				console.log(decodeURIComponent(data.Body))
				setContents(decodeURIComponent(data.Body))
			})
		})
	}

	const editContent = (filename, data) => {
		var fileKey = encodeURIComponent(filename);
		s3.headObject({ Key: fileKey }, function(err, d) {
			
			s3.putObject({ Key: fileKey, Body: data }, function(err, d) {
			  if (err) {
				return alert("There was an error creating your album: " + err.message);
			  }
			});
		  });
	}

	const handleClick = () => {
		// viewcontent('tmp2')
		editContent('tmp2', 'ohhhhhhhhhhh');
		// listfiles();
		// listfolders();
	}
	return <>
	<button onClick={handleClick}> Click </button>
	<p>{contents}</p>
	</>
}

export default Gallery;