import {baseUrl} from "../common/request";

export function upImg(tempFiles, successCallback, errorCallback) {
    // @ts-ignore

    uni.showLoading({
        title: '图片上传中',
    });
    // @ts-ignore

    uni.uploadFile({
        url: baseUrl + 'upload/image',
        filePath: tempFiles.path,
        fileType: tempFiles.extname,
        name: 'picsssssssssssssssssssssss',
        formData: {
            'filename': 'picsssssssssssssssssssssss',
        },
        header: {
            // #ifdef MP
            "Content-Type": "multipart/form-data",
            // #endif
            // @ts-ignore

            'Authori-zation': 'Bearer ' + uni.getStorageSync('token'),
        },
        success: function(res) {
            // @ts-ignore

            uni.hideLoading();
            if (res.statusCode === 403) {
                // @ts-ignore

                uni.showToast({
                    title: res.data,
                });
            } else {
                let data = res.data ? JSON.parse(res.data) : {};
                if (data.status === 200) {
                    successCallback && successCallback(data)
                } else {
                    errorCallback && errorCallback(data);
                    // @ts-ignore

                    uni.showToast({
                        title: data.msg
                    });
                }
            }
        },
        fail: function(res) {
            // @ts-ignore

            uni.hideLoading();
            // @ts-ignore

            uni.showToast({
                title: '上传图片失败',
            });
        },
    })
}


// 单图上传
/*
 	 * 单图上传
 	 * @param object opt
 	 * @param callable successCallback 成功执行方法 data
 	 * @param callable errorCallback 失败执行方法
 	 */
export function uploadImageOne(opt, successCallback, errorCallback) {
    // @ts-ignore
    let that = uni;
    if (typeof opt === 'string') {
        let url = opt;
        opt = {};
        opt.url = url;
    }
    let count = opt.count || 1,
        sizeType = opt.sizeType || ['compressed'],
        sourceType = opt.sourceType || ['album', 'camera'],
        is_load = opt.is_load || true,
        uploadUrl = opt.url || '',
        inputName = opt.name || 'pics',
        fileType = opt.fileType || 'image';
    // @ts-ignore

    uni.chooseImage({
        count: count, //最多可以选择的图片总数
        sizeType: sizeType, // 可以指定是原图还是压缩图，默认二者都有
        sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
        crop:{
            quality:100,
            width:44,
            height:44
        },
        success: function(res) {
            // console.log()
            //启动上传等待中...
            // @ts-ignore

            uni.showLoading({
                title: '图片上传中',
            });
            // @ts-ignore

            uni.uploadFile({
                url: baseUrl + uploadUrl,
                filePath: res.tempFilePaths[0],
                fileType: fileType,
                name: inputName,
                formData: {
                    'filename': inputName
                },
                header: {
                    // #ifdef MP
                    "Content-Type": "multipart/form-data",
                    // #endif
                    // @ts-ignore

                    'Authori-zation':'Bearer '+ uni.getStorageSync('token'),
                },
                success: function(res) {
                    // @ts-ignore

                    uni.hideLoading();
                    if (res.statusCode === 403) {
                        that.showToast({
                            title: res.data
                        });
                    } else {
                        let data = res.data ? JSON.parse(res.data) : {};
                        if (data.status === 200) {
                            successCallback && successCallback(data)
                        } else {
                            errorCallback && errorCallback(data);
                            that.showToast({
                                title: data.msg
                            });
                        }
                    }
                },
                fail: function(res) {
                    // @ts-ignore

                    uni.hideLoading();
                    that.showToast({
                        title: '上传图片失败'
                    });
                }
            })
            // pathToBase64(res.tempFilePaths[0])
            // 	.then(imgBase64 => {
            // 		console.log(imgBase64);

            // 	})
            // 	.catch(error => {
            // 		console.error(error)
            // 	})
        }
    })
}
