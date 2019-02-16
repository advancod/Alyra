function ping(){
const node = new Ipfs({ repo: 'ipfs-' + Math.random() })
node.once('ready', () => {
			node.swarm.addrs().then(addrs => {
        let address = addrs[1].id._idB58String
				document.getEle mentById('addresse').innerHTML = address
				node.ping(address).then(res=>{
					res.forEach((r) => {
						if (r.time) {
									document.getElementById('result').innerHTML = r.time
							} else {
									document.getElementById('result').innerHTML = r.text
							}
					})
				})
			})
		})
}
