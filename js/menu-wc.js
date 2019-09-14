'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@donmahallem/github-page documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-816af83464c78d93809a395542352c27"' : 'data-target="#xs-components-links-module-AppModule-816af83464c78d93809a395542352c27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-816af83464c78d93809a395542352c27"' :
                                            'id="xs-components-links-module-AppModule-816af83464c78d93809a395542352c27"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-816af83464c78d93809a395542352c27"' : 'data-target="#xs-injectables-links-module-AppModule-816af83464c78d93809a395542352c27"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-816af83464c78d93809a395542352c27"' :
                                        'id="xs-injectables-links-module-AppModule-816af83464c78d93809a395542352c27"' }>
                                        <li class="link">
                                            <a href="injectables/GithubApiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GithubApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NpmPackageInfoModule.html" data-type="entity-link">NpmPackageInfoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NpmPackageInfoModule-ce7cbd46a09063575e5b395e9c19d20b"' : 'data-target="#xs-components-links-module-NpmPackageInfoModule-ce7cbd46a09063575e5b395e9c19d20b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NpmPackageInfoModule-ce7cbd46a09063575e5b395e9c19d20b"' :
                                            'id="xs-components-links-module-NpmPackageInfoModule-ce7cbd46a09063575e5b395e9c19d20b"' }>
                                            <li class="link">
                                                <a href="components/NpmPackageInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NpmPackageInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NpmPackageListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NpmPackageListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObjectTreeModule.html" data-type="entity-link">ObjectTreeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ObjectTreeModule-563c081b4d483e6a79061e20e8a1352e"' : 'data-target="#xs-components-links-module-ObjectTreeModule-563c081b4d483e6a79061e20e8a1352e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ObjectTreeModule-563c081b4d483e6a79061e20e8a1352e"' :
                                            'id="xs-components-links-module-ObjectTreeModule-563c081b4d483e6a79061e20e8a1352e"' }>
                                            <li class="link">
                                                <a href="components/ObjectTreeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObjectTreeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepoModule.html" data-type="entity-link">RepoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RepoModule-3914b957f8617eaf33993bd3b755fad0"' : 'data-target="#xs-components-links-module-RepoModule-3914b957f8617eaf33993bd3b755fad0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RepoModule-3914b957f8617eaf33993bd3b755fad0"' :
                                            'id="xs-components-links-module-RepoModule-3914b957f8617eaf33993bd3b755fad0"' }>
                                            <li class="link">
                                                <a href="components/RepoDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepoDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RepoStatsBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepoStatsBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RepoStatsBoxItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepoStatsBoxItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepoRoutingModule.html" data-type="entity-link">RepoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReposModule.html" data-type="entity-link">ReposModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReposModule-516a1f44747449475a944eafd8f2684a"' : 'data-target="#xs-components-links-module-ReposModule-516a1f44747449475a944eafd8f2684a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReposModule-516a1f44747449475a944eafd8f2684a"' :
                                            'id="xs-components-links-module-ReposModule-516a1f44747449475a944eafd8f2684a"' }>
                                            <li class="link">
                                                <a href="components/RepoListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepoListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReposOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReposOverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReposRoutingModule.html" data-type="entity-link">ReposRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FileDownloadService.html" data-type="entity-link">FileDownloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GithubApiService.html" data-type="entity-link">GithubApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NpmPackageService.html" data-type="entity-link">NpmPackageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RepoResolver.html" data-type="entity-link">RepoResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/RepoResolver-1.html" data-type="entity-link">RepoResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ReposResolver.html" data-type="entity-link">ReposResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ExampleFlatNode.html" data-type="entity-link">ExampleFlatNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FoodNode.html" data-type="entity-link">FoodNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GithubFileId.html" data-type="entity-link">GithubFileId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListItem.html" data-type="entity-link">ListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListItem-1.html" data-type="entity-link">ListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NpmPackage.html" data-type="entity-link">NpmPackage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Repository.html" data-type="entity-link">Repository</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});