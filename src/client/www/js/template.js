angular.module('mySales.template', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/aboutTpl.html',
    "<ion-view title=About class=about><ion-content class=padding><h1>About bongard</h1></ion-content></ion-view>"
  );


  $templateCache.put('js/archieved/archievedTpl.html',
    "<ion-view title=Archieved class=archieved><ion-content ng-controller=ArchievedCtrl class=padding><ul class=list><li class=item ng-repeat=\"item in list\"><a ui-sref=\"tabs.checkPoint.params({type: checkPointType, id: $index})\">Strength: {{$index + 1}}, Author: {{item.author}}</a></li></ul></ion-content></ion-view>"
  );


  $templateCache.put('js/checkPoint/checkPointTpl.html',
    "<ion-view title=Bongard><ion-content ng-controller=CheckPointCtrl class=\"padding check-point\"><ion-nav-buttons side=right><button class=button onclick=\"window.plugins.socialsharing.share('This is a really interesting game to help you increase your IQ', 'Bongard', 'http://www.baidu.com/img/bd_logo1.png', 'http://www.baidu.com')\">Share</button></ion-nav-buttons><div ng-show=\"currentCheckPointLevel === checkPointLevelsCount\">You already passed all of the check points!</div><div ng-show=\"currentCheckPointLevel < checkPointLevelsCount\"><div class=info><div>Author: <strong class=author>{{author}}</strong>, Level: <strong class=current-level>{{currentCheckPointLevel + 1}}</strong> / Total: <strong class=total-level>{{checkPointLevelsCount}}</strong></div></div><div class=images-container><button class=button ng-repeat=\"image in images\" ng-click=\"(isClickable() || image.selected) && (image.selected = !image.selected)\" ng-class=\"{selected: image.selected}\"><img ng-src=\"{{image.url}}\"></button></div><div class=description>Select 3 of them with the same pattern</div><div class=left-chances ng-class=\"{'text-safe': leftChances === 3, 'text-warning': leftChances === 2, 'text-danger': leftChances === 1}\">You have {{leftChances}} chances left to continue.</div><div class=actions><button class=\"button button-small button-positive\" ng-click=showToolTip()>Tooltip</button> <button class=\"button button-small button-energized button-confirm\" ng-class=\"{disabled: !canConfirm()}\" ng-click=confirm()>Confirm</button></div><div class=achieved><a ui-sref=\"tabs.archieved({type: checkPointType})\" class=\"button button-small button-block button-stable\">See what you have achieved</a></div></div></ion-content></ion-view>"
  );


  $templateCache.put('js/contactTpl.html',
    "<ion-view title=Contact class=about><ion-content class=padding><h1>Contact</h1></ion-content></ion-view>"
  );


  $templateCache.put('js/home/homeTpl.html',
    "<ion-view title=\"Welcome to Bongard!\" class=home><ion-content ng-controller=HomeCtrl class=padding><a ng-repeat=\"checkPointType in gameInfo.checkPointTypes\" ui-sref=\"tabs.checkPoint.params({type: checkPointType.name})\" class=\"button button-block\" ng-class=buttonClasses[checkPointType.name]><div class=title>{{checkPointType.name}}</div><div class=description ng-if=\"gameStatus[checkPointType.name] === checkPointType.checkPoints.length\"><small>Done!</small></div><div ng-if=\"(gameStatus[checkPointType.name] || 0) < checkPointType.checkPoints.length\"><small>Level: {{(gameStatus[checkPointType.name] || 0) + 1}} / Total: {{checkPointType.checkPoints.length}}</small></div></a></ion-content></ion-view>"
  );


  $templateCache.put('js/tabsTpl.html',
    "<ion-tabs class=\"tabs-icon-left tabs-positive\"><ion-tab title=Home icon=ion-home ui-sref=tabs.home><ion-nav-view name=home></ion-nav-view></ion-tab><ion-tab title=About icon=ion-ios7-information ui-sref=tabs.about><ion-nav-view name=about></ion-nav-view></ion-tab><ion-tab title=Contact icon=ion-ios7-world ui-sref=tabs.contact><ion-nav-view name=contact></ion-nav-view></ion-tab></ion-tabs>"
  );

}]);