import { withStyles } from '@material-ui/core/styles';
import React, { Children, cloneElement } from 'react';
import {
    BooleanField,
    BulkActions,
    BulkDeleteAction,
    ChipField,
    Datagrid,
    DateField,
    EditButton,
    Filter,
    List,
    NumberField,
    ReferenceArrayField,
    Responsive,
    ShowButton,
    SimpleList,
    SingleFieldList,
    TextField,
    TextInput,
    translate,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import getNotifications from '../github';

const styles = theme => ({
    title: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    hiddenOnSmallScreens: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    publishedAt: { fontStyle: 'italic' },
});

const PostList = withStyles(styles)(({ classes, ...props }) => (
    <List
        {...props}
        sort={{ field: 'published_at', order: 'DESC' }}
    >
        {getNotifications()}
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record =>
                        new Date(record.published_at).toLocaleDateString()
                    }
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="title" cellClassName={classes.title} />
                    <DateField
                        source="published_at"
                        cellClassName={classes.publishedAt}
                    />

                    <BooleanField
                        source="commentable"
                        label="resources.posts.fields.commentable_short"
                        sortable={false}
                    />
                    <NumberField source="views" />
                </Datagrid>
            }
        />
    </List>
));

export default PostList;
