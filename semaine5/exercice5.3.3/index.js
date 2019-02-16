const node = new Ipfs({ repo: 'ipfs-' + Math.random() });
		node.once('ready', () => {
			node.id(function (err, id) {
				if (err) {
					throw err;
				}
				console.log("connecté, id : ", id);
			});
		})

		function publishString() {
			string = document.getElementById('string').value;
			node.add(new node.types.Buffer(string), (err,filesAdded) => {
				if (err) {
					return console.error('Error',err,res);
				}
				filesAdded.forEach(file => {
					console.log('Add success', file.hash);
					document.getElementById('result').innerHTML = file.hash;
				});
			})
		}

		function getStringFromHash() {
			hash = document.getElementById('hash').value;
			node.cat(hash, function (err, file) {
  				if (err) {
    				throw err;
  				}
  			console.log(file.toString('utf8'));
  			document.getElementById("result2").innerHTML = file.toString('utf8');
			});
		}
