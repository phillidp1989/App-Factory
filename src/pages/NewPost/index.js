import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Zoom,
  Fab
} from '@material-ui/core';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Autocomplete from '@material-ui/lab/Autocomplete';
import technologies from './technologies.json';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { green } from '@material-ui/core/colors';
