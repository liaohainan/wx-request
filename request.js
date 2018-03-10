function request(option) {
	let { url = '', data = {}, method = 'GET', header = { "content-type": "application/json" } } = option
	return new Promise((reslove, reject) => {
		// 网络请求
		let _reslove = reslove
		let _reject = reject
		wx.request({
			url: url,
			data: data,
			method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			header: header, // 设置请求的 header
			success: (res) => _reslove(res.data),
			fail: (res) => _reject(res),
			complete: (res) => {
				// complete
			}
		})
	})
}
export default request
