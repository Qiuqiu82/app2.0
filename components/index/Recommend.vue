<template>

	<view class="recommend bg-color">
		
		<view class="recommend-item">
			<image class="item-big" src="" mode=""></image>
			<view class="item-small">
				<image class="item-img" src="" mode=""></image>
				<image class="item-img" src="" mode=""></image>
				<image class="item-img" src="" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	/*
	一张大图三张小图没有,取消掉
	Card公共,
	*/
</script>

<style>
.recommend{
	padding:20rpx;
}
.recommend-item{
	display: flex;
	flex-direction: column;
	border-radius: 20rpx;
	border: 2rpx solid #CCCCCC;
	overflow: hidden;
	margin:20rpx 0;
}
.item-big{
	width:100%;
	height: 300rpx;
}
.item-small{
	width:100%;
	height: 240rpx;
}
.item-img{
	width:33.3333%;
	height: 240rpx;
}
</style>