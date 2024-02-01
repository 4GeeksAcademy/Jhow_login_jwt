"""empty message

Revision ID: b410f5a5648b
Revises: f44c227d10b1
Create Date: 2024-01-26 20:38:22.848698

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b410f5a5648b'
down_revision = 'f44c227d10b1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('view_state',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('value', sa.Enum('Visto', 'Por Ver', name='State'), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('value')
    )
    op.create_table('follower',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_from_id', sa.Integer(), nullable=False),
    sa.Column('user_to_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_from_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['user_to_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('movie_review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('movie_id', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('personal_list',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('movie_id', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('view_state_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['view_state_id'], ['view_state.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('name', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('age', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('profile_picture', sa.String(length=120), nullable=True))
        batch_op.add_column(sa.Column('is_admin', sa.Boolean(), nullable=False))
        batch_op.create_unique_constraint(None, ['username'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('is_admin')
        batch_op.drop_column('profile_picture')
        batch_op.drop_column('age')
        batch_op.drop_column('name')
        batch_op.drop_column('username')

    op.drop_table('personal_list')
    op.drop_table('movie_review')
    op.drop_table('follower')
    op.drop_table('view_state')
    # ### end Alembic commands ###