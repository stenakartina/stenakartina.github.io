var rospiSten = angular.module('rospiSten', []);

rospiSten.run(function($rootScope) {
	$rootScope.showPreloader = false;
});

rospiSten.controller('mainApp', function ($scope, $rootScope) {
	angular.element(document).ready(function () {
		$rootScope.showPreloader = true;
	});

	$scope.init = function () {
		$rootScope.showPreloader = false;
	};
});

rospiSten.controller('rospiStenAlbumCtrl', function ($scope, $interval, $rootScope) {
	$scope.albums = [
		/*{
			'id': 0,
			'title': 'Bunker',
			'description': '2й этаж заведения в стиле комиксов и т.д. и т.п.',
			'images': [
				{
					'title': '11',
					'link': 'img/album_1/1.jpg'
				},{
					'title': '12',
					'link': 'img/album_1/2.jpg'
				},{
					'title': '13',
					'link': 'img/album_1/3.jpg'
				}
			]
		},{	
			'id': 1,
			'title': 'Звукозаписывающая студия',
			'description': 'Наши работы в молодежном центре г.Таганрог',
			'images': [
				{
					'title': '21',
					'link': 'img/album_2/1.jpg'
				},{
					'title': '22',
					'link': 'img/album_2/2.jpg'
				},{
					'title': '23',
					'link': 'img/album_2/3.jpg'
				},{
					'title': '24',
					'link': 'img/album_2/4.jpg'
				}
			]
		},{
			'id': 2,
			'title': 'Стоматологический кабинет',
			'description': 'Наши работы в сети стоматологических кабинетов "тут должно быть название"',
			'images': [
				{
					'title': '31',
					'link': 'img/album_3/1.jpg',
				},{
					'title': '32',
					'link': 'img/album_3/2.jpg',
				},{
					'title': '33',
					'link': 'img/album_3/3.jpg',
				}
			]
		},{
			'id': 3,
			'title': 'Магазин одежды Бунт',
			'description': 'Красиво и весело',
			'images': [
				{
					'title': '41',
					'link': 'img/album_4/1.jpg',
				},{
					'title': '42',
					'link': 'img/album_4/2.jpg',
				},{
					'title': '43',
					'link': 'img/album_4/3.jpg',
				},{
					'title': '42',
					'link': 'img/album_4/4.jpg',
				},{
					'title': '43',
					'link': 'img/album_4/5.jpg',
				},{
					'title': '42',
					'link': 'img/album_4/6.jpg',
				},{
					'title': '43',
					'link': 'img/album_4/7.jpg',
				}
			]
		}*/
		{
			'id': 0,
			'title': 'Монументально-декоративная живопись',
			'description': 'Примеры работ',
			'images': [
				{
					'title': '11',
					'link': 'img/album_5/1.jpg'
				},{
					'title': '12',
					'link': 'img/album_5/2.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/3.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/4.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/5.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/6.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/7.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/8.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/9.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/10.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/11.jpg'
				},{
					'title': '13',
					'link': 'img/album_5/12.jpg'
				},{
					'title': '11',
					'link': 'img/album_1/3.jpg'
				},{
					'title': '11',
					'link': 'img/album_2/2.jpg'
				},{
					'title': '11',
					'link': 'img/album_2/3.jpg'
				},{
					'title': '11',
					'link': 'img/album_4/7.jpg'
				},{
					'title': '11',
					'link': 'img/album_4/5.jpg'
				},{
					'title': '11',
					'link': 'img/album_4/6.jpg'
				}
			]
		},
		{
			'id': 1,
			'title': 'Станковая живопись,графика',
			'description': 'Примеры работ',
			'images': [
				{
					'title': '11',
					'link': 'img/album_6/1.jpg'
				},{
					'title': '12',
					'link': 'img/album_6/2.jpg'
				},{
					'title': '13',
					'link': 'img/album_6/3.jpg'
				},{
					'title': '13',
					'link': 'img/album_6/4.jpg'
				},{
					'title': '13',
					'link': 'img/album_6/5.jpg'
				},{
					'title': '13',
					'link': 'img/album_6/6.jpg'
				},{
					'title': '13',
					'link': 'img/album_6/7.jpg'
				}
			]
		},
		{
			'id': 2,
			'title': 'Новая жизнь старых вещей',
			'description': 'Примеры работ',
			'images': [
				{
					'title': '11',
					'link': 'img/album_7/1.jpg'
				},{
					'title': '12',
					'link': 'img/album_7/2.jpg'
				},{
					'title': '13',
					'link': 'img/album_7/3.jpg'
				},{
					'title': '13',
					'link': 'img/album_7/4.jpg'
				},{
					'title': '13',
					'link': 'img/album_7/5.jpg'
				}
			]
		},
		{
			'id': 3,
			'title': 'Идеи и наброски',
			'description': 'Примеры работ',
			'images': [
				{
					'title': '11',
					'link': 'img/album_8/1.jpg'
				},{
					'title': '12',
					'link': 'img/album_8/2.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/3.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/4.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/5.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/6.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/7.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/8.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/9.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/10.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/11.jpg'
				},{
					'title': '13',
					'link': 'img/album_8/12.jpg'
				}
			]
		},
	];

	$scope.selectedAlbum = [];

	$scope.selectAlbum = function(oAlbum) {
		if ($scope.selectedAlbum || oAlbum.id !== $scope.selectedAlbum.id){
			$scope.selectedAlbum = [];
			$scope.selectedAlbum.push(oAlbum);
			_.each($scope.albums, function(oItem){
				oItem.selected = false;
			});
			oAlbum.selected = true;
			if (!_.some($scope.selectedAlbum[0].images, function(oItem){return oItem.selected === true;})){
				$scope.selectedAlbum[0].images[0].selected = true;
			}
		}
	};

	$scope.selectSlide = function(oImage) {
		_.each($scope.selectedAlbum[0].images, function(oImage){
			oImage.selected = false;
		});
		oImage.selected = true;
	};

	//Slide Buttons
	$scope.nextSlide = function() {
		var self = this,
			nextSlideIndex = 0
		;
		_.find(self.selectedAlbum[0].images, function(oImage, index){
			if (oImage.selected){
				if (index < self.selectedAlbum[0].images.length - 1){
					nextSlideIndex = index + 1;
				}
				self.selectSlide(self.selectedAlbum[0].images[nextSlideIndex]);
				return true;
			}
		});
	};
	$scope.prevSlide = function() {
		var self = this,
			nextSlideIndex = self.selectedAlbum[0].images.length - 1
		;
		_.find(self.selectedAlbum[0].images, function(oImage, index){
			if (oImage.selected){
				if (index > 0){
					nextSlideIndex = index - 1;
				}
				self.selectSlide(self.selectedAlbum[0].images[nextSlideIndex]);
				return true;
			}
		});
	};

	//Autoslide Timer
	var timer;
	$scope.stopAutoslide = function(){
		$interval.cancel(timer);
	};
	$scope.startAutoslide = function(){
		timer = $interval(function() {
			$scope.nextSlide();
		}, 5000);
	};

	// Lightbox
	$scope.showModal = false;
	$scope.lightboxImg = '';
	$scope.openLightboxModal = function (img) {
		$rootScope.showModal = true;
		$scope.lightboxImg = img;
	};

	$scope.lightboxPrev = function(){
		var openedImageIndex = 0;
		_.find($scope.selectedAlbum[0].images, function(oImage, index){
			if ($scope.lightboxImg === oImage){
				openedImageIndex = index;
			}
			//return true;
		});
		if (openedImageIndex > 0){
			$scope.openLightboxModal($scope.selectedAlbum[0].images[openedImageIndex - 1]);
		} else {
			$scope.openLightboxModal($scope.selectedAlbum[0].images[$scope.selectedAlbum[0].images.length - 1]);
		}
	};
	$scope.lightboxNext = function(){
		var openedImageIndex = 0;
		_.find($scope.selectedAlbum[0].images, function(oImage, index){
			if ($scope.lightboxImg === oImage){
				openedImageIndex = index;
			}
		});
		if (openedImageIndex >= $scope.selectedAlbum[0].images.length - 1){
			$scope.openLightboxModal($scope.selectedAlbum[0].images[0]);
		} else {
			$scope.openLightboxModal($scope.selectedAlbum[0].images[openedImageIndex + 1]);
		}
	};

	//On load show album first
	$scope.startAutoslide();
	$scope.selectAlbum($scope.albums[0]);
});