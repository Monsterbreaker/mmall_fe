/*
 * @Author: zhengquan
 * @Date:   2017-06-25 11:46:52
 * @Last Modified by:   zhengquan
 * @Last Modified time: 2017-06-25 23:22:58
 */

'use strict';

var _util = require('util/util.js');
var _order = {
    //获取产品列表信息
    getProductList: function(resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/customer/order/get_order_cart_product.do'),
            success: resolve,
            error: reject,
        });
    },
    // 提交订单
    createOrder: function(orderInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/customer/order/create.do'),
            data: orderInfo,
            method: 'POST',
            success: resolve,
            error: reject,
        });
    },
    //获取订单列表
    getOrderList: function(listParam, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/customer/order/list.do'),
            data: listParam,
            success: resolve,
            error: reject,
        });
    },
    //获取订单详情
    getOrderDetail: function(orderNo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/customer/order/detail.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject,
        });
    },
    cancelOrder: function(orderNo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/customer/order/cancel.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject,
        });
    }
};
module.exports = _order;
