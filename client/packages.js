import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link, withRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import axios from 'axios';
import YouTube from 'react-youtube';
import autosize from 'autosize';
import debounce from 'debounce';

export {
  React, Component, connect, Provider, combineReducers, createStore, applyMiddleware,
  compose, ReactDOM, BrowserRouter, Switch, Route, Link, withRouter, thunk, axios, YouTube,
  autosize, debounce
}
